import { baseApi } from 'services/baseApi';

import {
  LogInRequest,
  LogInResponse,
  ForgotPasswordRequest,
  ForgotPasswordResponse,
  RenewPasswordRequest,
  RenewPasswordResponse,
  GetUserResponse,
} from './dto';

const authServiceWithTag = baseApi.enhanceEndpoints({ addTagTypes: [] });

export const authService = authServiceWithTag.injectEndpoints({
  endpoints: (build) => ({
    logIn: build.mutation<LogInResponse, LogInRequest>({
      query: (data) => ({
        url: '/login',
        method: 'POST',
        body: data,
      }),
    }),
    forgotPassword: build.mutation<ForgotPasswordResponse, ForgotPasswordRequest>({
      query: (data) => ({
        url: '/password/forgot',
        method: 'POST',
        body: data,
      }),
    }),
    renewPassword: build.mutation<RenewPasswordResponse, RenewPasswordRequest>({
      query: (data) => ({
        url: '/password/reset',
        method: 'POST',
        body: data,
      }),
    }),
    logOut: build.mutation({
      query: () => ({
        url: '/logout',
        method: 'DELETE',
      }),
    }),
    getUser: build.query<GetUserResponse, undefined>({
      query: () => ({
        url: '/users/profile',
        method: 'GET',
      }),
    }),
  }),
});
