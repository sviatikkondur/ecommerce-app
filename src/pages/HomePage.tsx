// HomePage.tsx
import React from 'react';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import { ProductList } from '../components/organisms/ProductList/ProductList';
import { Filters } from '../components/organisms/Filters/Filters';

export const HomePage: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Grid
        container
        sx={{
          margin: '0 auto',
          padding: '20px',     
        }}
      >
        <Filters />
        <ProductList />
      </Grid>
    </Container>
  );
};
