import { lazy } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { ProtectedRoute, Layout, ExternalBaseComponent } from 'components';
import { Paths } from 'enums';

const Login = lazy(() => import('pages/Login'));
const SignUp = lazy(() => import('pages/SignUp'));
const RestorePassword = lazy(() => import('pages/RestorePassword'));
const ConfirmationCode = lazy(() => import('pages/RestorePassword/ConfirmationCode'));
const NewPassword = lazy(() => import('pages/RestorePassword/NewPassword'));
const Clients = lazy(() => import('pages/Clients'));

const InternalRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to={Paths.MAIN} />} />
      <Route path={Paths.CLIENTS} element={<Clients />} />
    </Routes>
  );
};

const RestorePasswordRoutes = () => {
  return (
    <Routes>
      <Route index element={<RestorePassword />} />
      <Route path={Paths.CODE} element={<ConfirmationCode />} />
      <Route path={Paths.NEW_PASSWORD} element={<NewPassword />} />
    </Routes>
  );
};

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path={Paths.LOGIN}
        element={
          <ExternalBaseComponent>
            <Login />
          </ExternalBaseComponent>
        }
      />
      <Route
        path={`${Paths.RESTORE_PASSWORD}/*`}
        element={
          <ExternalBaseComponent>
            <RestorePasswordRoutes />
          </ExternalBaseComponent>
        }
      />
      <Route
        path={Paths.SIGN_UP}
        element={
          <ExternalBaseComponent>
            <SignUp />
          </ExternalBaseComponent>
        }
      />

      <Route
        path="*"
        element={
          <Layout>
            <ProtectedRoute>
              <InternalRoutes />
            </ProtectedRoute>
          </Layout>
        }
      />
    </Routes>
  );
};
