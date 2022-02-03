import React, { ReactNode } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import { ProvideRouteWithAuth } from 'components/global/routeProviders/WithAuth/ProvideRouteWithAuth';
import { ProvideRouteWithoutAuth } from 'components/global/routeProviders/WithoutAuth/ProvideRouteWithoutAuth';

import { MainLayout } from 'components/layout/Main/MainLayout';
import { WelcomeLayout } from 'components/layout/Welcome/WelcomeLayout';

import { LogInPage } from 'pages/auth/LogIn/LogInPage';
import { FirstTimeLogInPage } from 'pages/auth/FirstTimeLogIn/FirstTimeLogInPage';
import { RenewPasswordPage } from 'pages/auth/RenewPassword/RenewPasswordPage';
import { ForgotPasswordPage } from 'pages/auth/ForgotPassword/ForgotPasswordPage';

export type EnhancedRouteObject = {
  breadcrumb?: ReactNode
} & RouteObject;

export const routesConfig: EnhancedRouteObject[] = [
  {
    element: <ProvideRouteWithoutAuth />,
    children: [
      {
        path: 'auth',
        element: <WelcomeLayout />,
        children: [
          {
            path: 'login',
            element: <LogInPage />,
          },
          {
            path: 'first-time-login',
            element: <FirstTimeLogInPage />,
          },
          {
            path: 'renew-password',
            element: <RenewPasswordPage />,
          },
          {
            path: 'forgot-password',
            element: <ForgotPasswordPage />,
          },
          {
            index: true,
            element: <Navigate to="login" />,
          },
        ],
      },
    ],
  },
  {
    element: <ProvideRouteWithAuth />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: 'profile',
            element: <div>Profile</div>,
          },
          {
            path: 'inbox',
            element: <div>Inbox</div>,
          },
          {
            path: 'dashboard',
            element: <div>Dashboard</div>,
          },
          {
            path: 'documents',
            element: <div>Documents</div>,
          },
          {
            path: 'archive',
            element: <div>Archive</div>,
          },
        ],
      },
    ],
  },
  {
    path: '/',
    element: <Navigate to="/documents" />,
  },
  {
    path: '*',
    element: <div>Not Found</div>,
  },
];
