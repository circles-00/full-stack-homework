'use client';

import { Snackbar } from '@mui/material';
import { type FC } from 'react';
import { IToast } from './types';
import { StyledSnackbarContent } from './Toast.styled';

export const Toast: FC<IToast> = ({
  open,
  onClose,
  variant,
  autoHideDuration = 3000,
  anchorOrigin = { vertical: 'bottom', horizontal: 'right' },
  message = '',
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
    >
      <StyledSnackbarContent type={variant} message={message} />
    </Snackbar>
  );
};
