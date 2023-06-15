import React, { ReactNode } from 'react';

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { ReturnComponentType } from 'common';
import './ExternalBaseComponent.scss';

type ExternalBaseComponentType = {
  children: ReactNode;
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export const ExternalBaseComponent = ({
  children,
}: ExternalBaseComponentType): ReturnComponentType => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {children}
      </Container>
    </ThemeProvider>
  );
};
