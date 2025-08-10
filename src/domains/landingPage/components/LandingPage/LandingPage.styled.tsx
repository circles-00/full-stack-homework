import { Box, Button, styled, Typography } from '@mui/material';

export const StyledContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 'calc(100vh - 72px)',
  background: `
    radial-gradient(ellipse at top, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
    radial-gradient(ellipse at bottom, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
    ${theme.palette.background.default}
  `,
  padding: theme.spacing(8, 4),
  position: 'relative',
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
    `,
    pointerEvents: 'none',
  },
}));

export const StyledHero = styled(Box)(() => ({
  textAlign: 'center',
  maxWidth: '800px',
  position: 'relative',
  zIndex: 1,
}));

export const StyledHeading = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
  fontWeight: 700,
  marginBottom: theme.spacing(3),
  background: 'linear-gradient(135deg, #f8fafc 0%, #cbd5e1 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  lineHeight: 1.1,
  letterSpacing: '-0.02em',
}));

export const StyledSubheading = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
  marginBottom: theme.spacing(6),
  color: theme.palette.text.secondary,
  maxWidth: '600px',
  lineHeight: 1.6,
  margin: `0 auto ${theme.spacing(6)}px auto`,
}));

export const StyledButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  justifyContent: 'center',
  flexWrap: 'wrap',
  marginBottom: theme.spacing(8),
}));

export const StyledPrimaryButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 4),
  fontSize: '1.1rem',
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: theme.shape.borderRadius,
  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
  boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)',
  minWidth: '180px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',

  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(99, 102, 241, 0.6)',
    background: 'linear-gradient(135deg, #5b5bd6 0%, #7c3aed 100%)',
  },
}));

export const StyledSecondaryButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 4),
  fontSize: '1.1rem',
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: theme.shape.borderRadius,
  borderColor: 'rgba(99, 102, 241, 0.5)',
  color: theme.palette.primary.main,
  backgroundColor: 'rgba(99, 102, 241, 0.1)',
  minWidth: '180px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',

  '&:hover': {
    transform: 'translateY(-2px)',
    borderColor: 'rgba(139, 92, 246, 0.7)',
    backgroundColor: 'rgba(99, 102, 241, 0.2)',
    boxShadow: '0 8px 25px rgba(99, 102, 241, 0.3)',
    color: '#8b5cf6',
  },
}));

export const StyledFeatureCard = styled(Box)(({ theme }) => ({
  background: 'rgba(26, 27, 58, 0.6)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(148, 163, 184, 0.1)',
  borderRadius:
    typeof theme.shape.borderRadius === 'number'
      ? theme.shape.borderRadius * 1.5
      : theme.shape.borderRadius,
  padding: theme.spacing(3),
  textAlign: 'center',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',

  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    borderColor: 'rgba(99, 102, 241, 0.3)',
  },

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
  },
}));

export const StyledFeaturesContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  justifyContent: 'center',
  flexWrap: 'wrap',
  maxWidth: '700px',
  width: '100%',
  position: 'relative',
  zIndex: 1,

  '& > *': {
    flex: '1 1 280px',
    maxWidth: '320px',
  },
}));
