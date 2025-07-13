import { Box, styled, Toolbar } from '@mui/material';
import Link from 'next/link';

export const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

export const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
});

export const StyledBox = styled(Box)({
  display: 'flex',
  gap: 1,
});
