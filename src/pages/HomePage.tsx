import React from 'react';
import Container from '@mui/material/Container';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { ProductList } from '../components/organisms/ProductList/ProductList';
import { Filters } from '../components/organisms/Filters/Filters';
import { useAppSelector } from '../hooks/useTypedSelector';
import { Error } from '../components/molecules/Error/Error';

export const HomePage: React.FC = () => {
  const { error } = useAppSelector(state => state.productsSlice);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container 
      maxWidth="xl"
    >
      {error && (
        <Error error={error} />
      )}

      {!error && (
        <Grid
          container
          height={isSmallScreen ? '' : '100%'}
          sx={{
            margin: '0 auto',
            padding: '20px 20px 40px',
          }}
        >
          <Filters />
          <ProductList />
        </Grid>
      )}
    </Container>
  );
};
