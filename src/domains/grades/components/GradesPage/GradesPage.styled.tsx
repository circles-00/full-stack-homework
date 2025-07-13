import { Box, Container, styled } from '@mui/material';

export const StyledFormContainer = styled('form')({
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
  width: '100%',
  height: '100%',
});

export const StyledContainer = styled(Container)({
  marginTop: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const StyledInputContainer = styled(Box)({
  minWidth: '200px',
});
