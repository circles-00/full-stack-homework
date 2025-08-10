'use client';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6366f1',
      light: '#818cf8',
      dark: '#4f46e5',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#10b981',
      light: '#34d399',
      dark: '#059669',
      contrastText: '#ffffff',
    },
    background: {
      default: '#0f0f23',
      paper: '#1a1b3a',
    },
    surface: {
      main: '#252547',
    },
    text: {
      primary: '#f8fafc',
      secondary: '#94a3b8',
    },
    divider: '#334155',
  },
  typography: {
    fontFamily: 'var(--font-geist-sans)',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 12,
          fontWeight: 500,
          fontSize: '0.95rem',
          padding: '10px 24px',
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: '0 10px 25px rgba(99, 102, 241, 0.3)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
          boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)',
          '&:hover': {
            background: 'linear-gradient(135deg, #5b5bd6 0%, #7c3aed 100%)',
            boxShadow: '0 8px 25px rgba(99, 102, 241, 0.6)',
          },
        },
        outlined: {
          borderColor: '#6366f1',
          color: '#6366f1',
          backgroundColor: 'rgba(99, 102, 241, 0.1)',
          '&:hover': {
            borderColor: '#8b5cf6',
            backgroundColor: 'rgba(99, 102, 241, 0.2)',
            color: '#8b5cf6',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(15, 15, 35, 0.8)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(148, 163, 184, 0.1)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#1a1b3a',
          border: '1px solid rgba(148, 163, 184, 0.1)',
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(26, 27, 58, 0.6)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(99, 102, 241, 0.2)',
          borderRadius: 12,
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: 'rgba(99, 102, 241, 0.1)',
            borderBottom: '1px solid rgba(99, 102, 241, 0.2)',
            borderRadius: '12px 12px 0 0',
            '& .MuiDataGrid-columnHeader': {
              '&:not(:last-child)': {
                borderRight: '1px solid rgba(99, 102, 241, 0.15)',
              },
            },
            '& .MuiDataGrid-columnHeaderTitle': {
              fontWeight: 600,
              color: '#f8fafc',
            },
          },
          '& .MuiDataGrid-cell': {
            borderBottom: '1px solid rgba(99, 102, 241, 0.1)',
            borderRight: '1px solid rgba(99, 102, 241, 0.1)',
            color: '#f8fafc',
            '&:last-child': {
              borderRight: 'none',
            },
          },
          '& .MuiDataGrid-row': {
            '&:hover': {
              backgroundColor: 'rgba(99, 102, 241, 0.08)',
            },
            '&.Mui-selected': {
              backgroundColor: 'rgba(99, 102, 241, 0.12)',
              '&:hover': {
                backgroundColor: 'rgba(99, 102, 241, 0.15)',
              },
            },
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: '1px solid rgba(99, 102, 241, 0.2)',
            backgroundColor: 'rgba(99, 102, 241, 0.05)',
          },
          '& .MuiDataGrid-selectedRowCount': {
            color: '#94a3b8',
          },
          '& .MuiDataGrid-overlay': {
            backgroundColor: 'rgba(26, 27, 58, 0.8)',
          },
        },
      },
    },
  },
});
