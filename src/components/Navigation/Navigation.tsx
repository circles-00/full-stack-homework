'use client';

import { AppBar, Typography, Button, Container } from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';
import { StyledBox, StyledLink, StyledToolbar } from './Navigation.styled';

const navigationItems = [
  { name: 'Numbers', path: '/numbers' },
  { name: 'Grades', path: '/grades' },
];

export const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <AppBar position="static">
      <Container>
        <StyledToolbar>
          <StyledLink href="/">
            <Typography variant="h6" component="div">
              AlisonAI
            </Typography>
          </StyledLink>
          <StyledBox>
            {navigationItems.map((item) => (
              <Button
                key={item.name}
                color="inherit"
                onClick={() => router.push(item.path)}
                variant={pathname === item.path ? 'outlined' : 'text'}
              >
                {item.name}
              </Button>
            ))}
          </StyledBox>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};
