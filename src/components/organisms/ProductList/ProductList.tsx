import { Alert, Box, CircularProgress, Grid, Slide, Snackbar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Product } from '../../molecules/Product/Product';
import { ProductsTitle } from '../../atoms/Typography/ProductsTitle';
import { ProductsPagination } from '../../atoms/Pagination/ProductsPagination';
import { useAppDispatch, useAppSelector } from '../../../hooks/useTypedSelector';
import { getProducts } from '../../../store/products/productsSlice';
import { TProduct } from '../../../types/Product';
import { SortBy } from '../../../types/SortBy';
import { useSearchParams } from 'react-router-dom';

export const ProductList: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [productsByCategory, setProductsByCategory] = useState<TProduct[]>([]);
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const {
    products, 
    loading,
  } = useAppSelector(state => state.productsSlice);

  const selectedCategory = searchParams.get('category') || 'all';
  const sortBy = searchParams.get('sort') || 'A-Z';
  const query = searchParams.get('query') || '';
  const page = searchParams.get('page') || '1';
  
  const handleToast = () => {
    setOpen(true);
  };

  const handleToastClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  useEffect(() => {
    dispatch(getProducts(selectedCategory));
  }, [dispatch]);

  useEffect(() => {
    if (products) {
      const sortedProducts = [...products].sort((a, b) => {
        switch (sortBy) {
          case SortBy.NameAsc:
            return a.title.localeCompare(b.title);
  
          case SortBy.NameDesc:
            return b.title.localeCompare(a.title);
  
          case SortBy.PriceLowest:
            return a.price - b.price;
  
          case SortBy.PriceHighest:
            return b.price - a.price;
  
          default:
            return 0;
        }
      });
  
      if (query) {
        const filteredProducts = sortedProducts
          .filter(product => product.title.toLowerCase().includes(query.toLowerCase()));
        setProductsByCategory(filteredProducts);
        setCount(filteredProducts.length);
      } else {
        setProductsByCategory(sortedProducts);
        setCount(sortedProducts.length);
      }
    }
  }, [products, sortBy, query, page]);

  useEffect(() => {
    dispatch(getProducts(selectedCategory));
  }, [selectedCategory])

  const getVisibleProducts = (page: number) => {
    const itemsPerPage = 6;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return productsByCategory.slice(startIndex, endIndex);
  }

  const visibleProducts = getVisibleProducts(+page);

  return (
    <Grid item sm={9} xs={12}>
      {!loading && <ProductsTitle />}

      <Box 
        height={'95%'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={loading ? 'center' : 'space-between'}
        alignItems={loading ? 'center' : ''}
      >
        {loading && <CircularProgress size={80}/>}

        {!loading && (
          <>
          <Grid container spacing={2}>
            {visibleProducts.map(product => (
              <Product 
                key={product.id} 
                product={product} 
                handleToastOpen={handleToast} 
              />
            ))}
          </Grid>

          {productsByCategory.length > 6 && (
            <Box
              display={'flex'}
              justifyContent={'center'}
            >
              <ProductsPagination 
                count={count}
              /> 
            </Box>
          )}
        </>
        )}

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
      </Box>
    </Grid>
  )
}
