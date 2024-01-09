import React from 'react';
import Container from '@mui/material/Container';
import { Box, Button, Grid, useMediaQuery, useTheme } from '@mui/material';
import { ProductList } from '../components/organisms/ProductList/ProductList';
import { Filters } from '../components/organisms/Filters/Filters';
import { useAppSelector } from '../hooks/useTypedSelector';
import { ErrorMessage } from '../components/atoms/ErrorMessage/ErrorMessage';

export const HomePage: React.FC = () => {
  const { error } = useAppSelector(state => state.productsSlice);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
