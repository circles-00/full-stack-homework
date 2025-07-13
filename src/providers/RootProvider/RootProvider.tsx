'use client';
import { FC } from 'react';
import { IRootProvider } from './types';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { QueryClientProvider } from '../QueryClientProvider/QueryClientProvider';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/theme';

export const RootProvider: FC<IRootProvider> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <AppRouterCacheProvider>
      <QueryClientProvider>{children}</QueryClientProvider>
    </AppRouterCacheProvider>
  </ThemeProvider>
);
