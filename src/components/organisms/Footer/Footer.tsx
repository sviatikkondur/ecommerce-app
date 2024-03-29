import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';

const FooterContainer = styled('footer')(({ theme }) => ({
  color: theme.palette.getContrastText('#c5c5c5'),
  height: 64,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0px -0.5px 0.5px 0px rgba(0, 0, 0, 0.4)',
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
