import { SnackbarProps } from '@mui/material';

export type TToastVariant = 'success' | 'error';

export interface IToast
  extends Pick<
    SnackbarProps,
    | 'open'
    | 'onClose'
    | 'autoHideDuration'
    | 'anchorOrigin'
    | 'autoHideDuration'
  > {
  variant: TToastVariant;
  message?: string;
}

export interface IStyledSnackbarContent {
  type: TToastVariant;
}
