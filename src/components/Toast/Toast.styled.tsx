'use client';

import { SnackbarContent, styled } from '@mui/material';
import { IStyledSnackbarContent } from './types';

export const StyledSnackbarContent = styled(SnackbarContent, {
  shouldForwardProp: (prop) => prop !== 'type',
})<IStyledSnackbarContent>(({ theme, type }) => ({
  backgroundColor:
    type === 'success'
      ? theme.palette.success.main
      : theme.palette.warning.main,
  color: theme.palette.common.white,
  fontWeight: theme.typography.fontWeightBold,
}));
