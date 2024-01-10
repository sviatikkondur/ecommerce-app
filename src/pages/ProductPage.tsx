import React, { useEffect, useState } from 'react'
import { TProduct } from '../types/Product'
import { getProduct } from '../api/products';
import { useParams } from 'react-router-dom';
import { Alert, Container, Grid, Slide, Snackbar, useMediaQuery, useTheme } from '@mui/material';
import { ProductDescription } from '../components/molecules/ProductDescription/ProductDescription';
import { Error } from '../components/molecules/Error/Error';
import { ProductPageLoader } from '../components/atoms/Loaders/ProductPageLoader';
import { ProductPageImage } from '../components/atoms/Media/ProductPageImage';


export const ProductPage = () => {
  const [product, setProduct] = useState<TProduct | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);

  const { id } = useParams();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await getProduct(id as string);
        setIsLoading(false);

        setProduct(data);
      } catch (error) {
        setError(true);
      }
    }

    loadProduct();
  }, []);

  const handleToast = () => {
    setOpen(true);
  };

  const handleToastClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Container maxWidth="xl">
      {!isLoading && product && (
        <Grid
          container
          sx={{
            margin: '0 auto',
            padding: '40px 20px',
          }}
          alignContent={isSmallScreen ? 'flex-start' : ''}
        >
          <ProductPageImage image={product.image} alt={product.title} />

          <ProductDescription 
            handleToast={handleToast}
            product={product}
          />

          <Snackbar 
            open={open} 
            autoHideDuration={2000} 
            onClose={handleToastClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            TransitionComponent={(props) => (
              <Slide {...props} direction="up" />
            )}
          >
            <Alert onClose={handleToastClose} severity="success" sx={{ width: '100%' }}>
              Product was added to cart!
            </Alert>
          </Snackbar>
        </Grid>
      )}

      {isLoading && !error && (
        <ProductPageLoader />
      )}

      {error && (
        <Error error={'Error message'} />
      )}
    </Container>
  )
}
