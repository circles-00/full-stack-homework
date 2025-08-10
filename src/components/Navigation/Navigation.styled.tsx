import { Box, styled, Theme, Toolbar } from '@mui/material';
import Link from 'next/link';

interface IStyledNavButton {
  active?: boolean;
}

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(1, 2),
  minHeight: '72px',
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: 'inherit',
  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  padding: theme.spacing(1, 1.5),
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    transform: 'scale(1.02)',
  },
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  alignItems: 'center',
}));

export const StyledNavButton = styled('button')<IStyledNavButton>(
  ({ theme, active }) => ({
    background: active
      ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
      : 'rgba(99, 102, 241, 0.1)',
    border: active ? 'none' : '1px solid rgba(99, 102, 241, 0.3)',
    color: active ? '#ffffff' : '#6366f1',
    padding: theme.spacing(1, 2.5),
    borderRadius: theme.shape.borderRadius,
    fontSize: '0.95rem',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    textTransform: 'none',
    fontFamily: 'inherit',

    '&:hover': {
      transform: 'translateY(-1px)',
      boxShadow: active
        ? '0 8px 25px rgba(99, 102, 241, 0.6)'
        : '0 4px 15px rgba(99, 102, 241, 0.3)',
      background: active
        ? 'linear-gradient(135deg, #5b5bd6 0%, #7c3aed 100%)'
        : 'rgba(99, 102, 241, 0.2)',
      borderColor: active ? 'transparent' : 'rgba(139, 92, 246, 0.5)',
      color: active ? '#ffffff' : '#8b5cf6',
    },

    '&:active': {
      transform: 'translateY(0)',
    },
  }),
);
