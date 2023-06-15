import React, { Suspense } from 'react';

import { AppRoutes } from 'app/routes';
import { Loader } from 'components/Loader/Loader';
import './App.scss';

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <AppRoutes />
    </Suspense>
  );
};
