import {
  createApi,
  FetchArgs,
  BaseQueryFn,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/dist/query/react';
import { appConfig } from 'constants/appConfig';
import { LocalStorage } from 'utils/localStorage';
import { logOutAction } from 'store/slices/auth/actions';
import { RefreshTokenResponse } from './auth/dto';

const baseQuery = fetchBaseQuery({
  baseUrl: appConfig.apiURL,
  prepareHeaders: (headers) => {
    const token = LocalStorage.accessToken.get();

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    headers.set('Accept', 'application/json');

    return headers;
  },
});

const customFetchBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
  > = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
      const { data: refreshResponse } = await baseQuery({
        url: '/refresh',
        method: 'POST',
        body: {
          refresh_token: LocalStorage.refreshToken.get(),
        },
      }, api, extraOptions) as { data: RefreshTokenResponse };

      if (refreshResponse && refreshResponse.access_token) {
        LocalStorage.accessToken.set(refreshResponse.access_token);
        LocalStorage.refreshToken.set(refreshResponse.refresh_token);
        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(logOutAction());
      }
    }

    return result;
  };

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: customFetchBaseQuery,
  endpoints: () => ({}),
});
