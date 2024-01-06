import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';

const FooterContainer = styled('footer')(({ theme }) => ({
  backgroundColor: '#95cedc',
  color: theme.palette.getContrastText('#95cedc'), // Selects text color for the background
  height: 64,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0px -1px 3px 0px rgba(0, 0, 0, 0.4)',
}));

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Container maxWidth="sm">
        <Typography variant="body2" color="textSecondary" align="center">
          © {new Date().getFullYear()} e-commerce. All rights reserved.
        </Typography>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
