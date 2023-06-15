import React from 'react';

import loadingLogo from 'assets/gif/loading.gif';
import { ReturnComponentType } from 'common';
import './Loader.scss';

export const Loader = (): ReturnComponentType => {
  const isLoading = true;

  return isLoading ? (
    <img src={loadingLogo} alt="loading-logo" className="Loader" />
  ) : null;
};
