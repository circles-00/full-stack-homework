'use client';

import { AppBar, Typography, Container } from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';
import {
  StyledBox,
  StyledLink,
  StyledToolbar,
  StyledNavButton,
} from './Navigation.styled';

const navigationItems = [
  { name: 'Numbers', path: '/numbers' },
  { name: 'Grades', path: '/grades' },
];

export const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <AppBar position="static" elevation={0}>
      <Container maxWidth="lg">
        <StyledToolbar>
          <StyledLink href="/">
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '1.5rem',
              }}
            >
              AlisonAI
            </Typography>
          </StyledLink>
          <StyledBox>
            {navigationItems.map((item) => (
              <StyledNavButton
                key={item.name}
                active={pathname === item.path}
                onClick={() => router.push(item.path)}
              >
                {item.name}
              </StyledNavButton>
            ))}
          </StyledBox>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};
