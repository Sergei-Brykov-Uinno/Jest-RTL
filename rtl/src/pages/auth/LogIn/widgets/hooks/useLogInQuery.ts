import { authService } from 'services/auth/authService';

export const useLogInQuery = () => {
  const [logIn, { isLoading: isLoadingLogIn }] = authService.useLogInMutation();
  const [getUser, { isLoading: isLoadingGetUser }] = authService.useLazyGetUserQuery();

  return {
    logIn,
    getUser,
    isLoading: isLoadingLogIn || isLoadingGetUser,
  };
};
