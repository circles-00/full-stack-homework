import React from 'react';
import { Typography } from '@mui/material';
import Link from 'next/link';
import {
  StyledContainer,
  StyledHero,
  StyledHeading,
  StyledSubheading,
  StyledButtonContainer,
  StyledPrimaryButton,
  StyledSecondaryButton,
  StyledFeatureCard,
  StyledFeaturesContainer,
} from './LandingPage.styled';

const features = [
  {
    title: 'Numbers',
    description:
      'Manage number pairs and calculate adjacent sums with powerful analytics',
  },
  {
    title: 'Grades',
    description:
      'Track academic performance across Math, Science, and History classes',
  },
];

export const LandingPage = () => {
  return (
    <StyledContainer>
      <StyledHero>
        <StyledHeading variant="h1">
          Modern Data Management Platform
        </StyledHeading>
        <StyledSubheading variant="h5">
          Streamline your number calculations and academic grade tracking with
          our intuitive, modern interface. Built for performance and designed
          for simplicity.
        </StyledSubheading>

        <StyledButtonContainer>
          <Link href="/numbers" passHref>
            <StyledPrimaryButton variant="contained">
              Explore Numbers
            </StyledPrimaryButton>
          </Link>
          <Link href="/grades" passHref>
            <StyledSecondaryButton variant="outlined">
              Manage Grades
            </StyledSecondaryButton>
          </Link>
        </StyledButtonContainer>

        <StyledFeaturesContainer>
          {features.map((feature, index) => (
            <StyledFeatureCard key={index}>
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: 'text.primary',
                }}
              >
                {feature.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.6,
                }}
              >
                {feature.description}
              </Typography>
            </StyledFeatureCard>
          ))}
        </StyledFeaturesContainer>
      </StyledHero>
    </StyledContainer>
  );
};
