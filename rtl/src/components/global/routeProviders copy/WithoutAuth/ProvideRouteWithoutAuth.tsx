import React, { memo } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuthState } from 'hooks/useAuthState';

import { PageLoader } from 'components/global/PageLoader/PageLoader';

const ProvideRouteWithoutAuth = memo(() => {
  const { user, isLoadingUser } = useAuthState();

  if (!user && isLoadingUser) {
    return (
      <PageLoader />
    );
  }

  if (user && !isLoadingUser) {
    return (
      <Navigate
        to="/documents"
        replace
      />
    );
  }

  return <Outlet />;
});

export { ProvideRouteWithoutAuth };
