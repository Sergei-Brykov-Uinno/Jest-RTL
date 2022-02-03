import { action, computed, makeAutoObservable, observable, runInAction } from "mobx";
import { inject, useInstance } from "react-ioc";
import { toast } from "react-toastify";
import { authAPI } from "../api/AuthAPI";
import { userAPI } from "../api/UserAPI";
import { httpClient } from "../util/http";
import { clearAuthData, getAccessToken, setAccessToken, setRefreshToken } from "../util/localStorage";
import { SignInRequest } from "./models/Auth";
import { RegisterUserRequest } from "./models/User";
import { injectModalService } from "./services/modal-service/ModalService";
import { TawkToService } from "./services/TawkToService";
import { UserStore } from "./UserStore";
import { injectNavigationStore } from "./NavigationStore";

/**
 * AuthStore manages user state
 *
 * login, logout, reload, attach email, verify email
 */

export class AuthStore {
  user: UserStore | undefined;
  isAuthenticated: boolean;
  loading: boolean = false;
  fetched: boolean = false;
  modalService = injectModalService(this);
  tawkToService: TawkToService = inject(this, TawkToService);
  history = injectNavigationStore(this).history;

  constructor() {
    this.isAuthenticated = Boolean(getAccessToken());
    if (this.isAuthenticated) {
      this.fetchUser();
    }
    makeAutoObservable(this, {
      signOut: action.bound,
      signIn: action.bound,
      register: action.bound,
      fetchUser: action.bound,
      verifyEmail: action.bound,
      hasUserDefaultProcess: computed,
      authUserRoles: computed,
      user: observable.deep,
    });
  }

  get hasUserDefaultProcess() {
    return Boolean(this.user?.default_process_id);
  }

  async signIn(payload: SignInRequest) {
    const { refresh_token, access_token } = await authAPI.signIn(payload);
    runInAction(() => {
      this.isAuthenticated = true;
    });
    setAccessToken(access_token);
    setRefreshToken(refresh_token);
    await this.fetchUser();
  }

  async signOut(exception: boolean = false) {
    try {
      if (!exception) {
        await authAPI.signOut();
      }
    } finally {
      httpClient.setAuthTokenHeader();
      clearAuthData();
      this.isAuthenticated = false;
    }
    this.history.push("/");
    window.location.reload();
  }

  async register(payload: RegisterUserRequest) {
    await userAPI.registerUser(payload);
  }

  get authUserRoles() {
    return this.fetched && this.user ? this.user.roles.data.map((role) => role.name) : [];
  }

  async fetchUser() {
    this.loading = true;
    try {
      const userProfile = await userAPI.getUserProfile();
      runInAction(() => {
        this.user = new UserStore(userProfile);
        this.fetched = true;
        this.tawkToService.mountTawkTo(this.user);
      });
    } catch (e) {
      toast.error("failed to get user");
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  async verifyEmail(userId: string, hash: string, expires: number, signature: string) {
    this.loading = true;
    try {
      await userAPI.verifyEmail(userId, hash, expires, signature);
      toast.success("Your email was successfully verified!");
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  async requestPasswordChange(email: string) {
    const response = await userAPI.requestPasswordChange(email);
    return response;
  }

  async resetPassword(email: string, token: string, password: string) {
    const response = await userAPI.resetPassword(email, token, password);
    return response;
  }
}

export function useAuthStore() {
  return useInstance(AuthStore);
}

export const injectAuthStore = (parentThis: object) => {
  return inject(parentThis, AuthStore);
};
