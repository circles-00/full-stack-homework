import React from 'react';
import { Box } from '@mui/material';
import Link from 'next/link';
import {
  StyledButton,
  StyledContainer,
  StyledHeading,
  StyledSubheading,
} from './LandingPage.styled';

export const LandingPage = () => {
  return (
    <StyledContainer>
      <StyledHeading>Welcome to the Application</StyledHeading>
      <StyledSubheading>
        Manage numbers and grades with ease. Choose a page to get started.
      </StyledSubheading>
      <Box>
        <Link href="/numbers" passHref>
          <StyledButton variant="contained" color="primary">
            Go to Numbers Page
          </StyledButton>
        </Link>
        <Link href="/grades" passHref>
          <StyledButton variant="outlined" color="secondary">
            Go to Grades Page
          </StyledButton>
        </Link>
      </Box>
    </StyledContainer>
  );
};
