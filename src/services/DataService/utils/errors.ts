import { AxiosError } from 'axios';
import { IBackendErrorResponse } from './types';

const isAxiosError = (error: unknown): error is AxiosError => {
  return (
    error instanceof Error &&
    'isAxiosError' in error &&
    typeof (error as AxiosError).isAxiosError === 'boolean'
  );
};

export const getAxiosErrorMessage = (error: Error) => {
  if (isAxiosError(error)) {
    return (error.response?.data as IBackendErrorResponse)?.message;
  }

  return error.message || 'An unexpected error occurred';
};
