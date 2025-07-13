import { Box, Button, styled, Typography } from '@mui/material';

export const StyledContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.default,
  flex: 1,
  padding: theme.spacing(4),
}));

export const StyledHeading = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
  color: theme.palette.text.primary,
}));

export const StyledSubheading = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  marginBottom: theme.spacing(4),
  color: theme.palette.text.secondary,
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  padding: theme.spacing(1.5, 3),
  fontSize: '1rem',
  textTransform: 'none',
  borderRadius: theme.shape.borderRadius,
}));
