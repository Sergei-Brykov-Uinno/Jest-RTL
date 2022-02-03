import React, { memo } from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';

import { useAuthState } from 'hooks/useAuthState';

import { PageLoader } from 'components/global/PageLoader/PageLoader';

const ProvideRouteWithAuth = memo(() => {
  const { user, isLoadingUser } = useAuthState();
  const location = useLocation();

  if (!user && isLoadingUser) {
    return (
      <PageLoader />
    );
  }

  if (!user && !isLoadingUser) {
    return (
      <Navigate
        to="/auth/login"
        state={{ from: location }}
        replace
      />
    );
  }

  return <Outlet />;
});

export { ProvideRouteWithAuth };
