'use client';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';

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
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AlisonAI
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
