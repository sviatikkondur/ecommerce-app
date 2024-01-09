import React from 'react';
import Container from '@mui/material/Container';
import { Box, Button, Grid } from '@mui/material';
import { ProductList } from '../components/organisms/ProductList/ProductList';
import { Filters } from '../components/organisms/Filters/Filters';
import { useAppSelector } from '../hooks/useTypedSelector';
import { ErrorMessage } from '../components/atoms/ErrorMessage/ErrorMessage';

export const HomePage: React.FC = () => {
  const { error } = useAppSelector(state => state.productsSlice);

  return (
    <Container 
      maxWidth="xl"
    >
      {error && (
        <Box
          height={'100%'}
          display={'flex'}
          flexDirection={'column'}
          gap={3}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <ErrorMessage message={error} />
          <Button 
            variant='contained' 
            color='error'
            onClick={() => window.location.reload()}
          >
            Try Again
          </Button>
        </Box>
        )
      }
      {!error && (
        <Grid
          container
          sx={{
            margin: '0 auto',
            padding: '20px 20px 40px',
            height: '100%',
          }}
        >
          <Filters />
          <ProductList />
        </Grid>
      )}
    </Container>
  );
};
