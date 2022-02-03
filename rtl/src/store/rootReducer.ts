import { AnyAction, combineReducers, Reducer } from '@reduxjs/toolkit';

import { LocalStorage } from 'utils/localStorage';
import { baseApi } from 'services/baseApi';

import { authSlice } from 'store/slices/auth/slice';
import { logOutAction } from 'store/slices/auth/actions';

import { forgotPasswordSlice } from 'pages/auth/ForgotPassword/widgets/store/slice';
import { RootState } from './configureStore';

export const combinedReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [authSlice.name]: authSlice.reducer,
  [forgotPasswordSlice.name]: forgotPasswordSlice.reducer,
});

export const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === logOutAction.type) {
    LocalStorage.clearStorage();
    state = {} as RootState;
  }

  return combinedReducer(state, action);
};
