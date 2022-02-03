import { User } from './types';

export interface LogInRequest {
  email: string;
  password: string;
  remember: boolean;
}

export interface LogInResponse {
  expires_in: number;
  token_type: string;
  access_token: string;
  refresh_token: string;
}

export interface RefreshTokenRequest {
  refresh_token: string;
}

export type RefreshTokenResponse = LogInResponse;

export interface ForgotPasswordRequest {
  email: string;
}

export interface ForgotPasswordResponse {
  message: string;
}

export interface RenewPasswordRequest {
  token?: string | null;
  email?: string | null;
  password: string;
  password_confirmation: string;
}

export interface RenewPasswordResponse {
  message: string;
}

export interface GetUserResponse {
  data: User
}
