import { Box, CircularProgress, Grid } from '@mui/material'
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
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  const selectedCategory = searchParams.get('category') || 'all';
  const sortBy = searchParams.get('sort') || 'A-Z';
  const query = searchParams.get('query') || '';
  
  const dispatch = useAppDispatch();

  const {
    products, 
    loading,
  } = useAppSelector(state => state.productsSlice);


  useEffect(() => {
    dispatch(getProducts());
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
  
      let updatedProductsByCategory;
  
      if (selectedCategory === 'all') {
        updatedProductsByCategory = sortedProducts;
      } else {
        updatedProductsByCategory = sortedProducts.filter(product => product.category === selectedCategory);
      }
  
      if (query) {
        const filteredProducts = updatedProductsByCategory
          .filter(product => product.title.toLowerCase().includes(query.toLowerCase()));
        setProductsByCategory(filteredProducts);
        setCount(filteredProducts.length);
      } else {
        setProductsByCategory(updatedProductsByCategory);
        setCount(updatedProductsByCategory.length);
      }
    }
  }, [products, selectedCategory, sortBy, query, page]);

  const handlePageChange = (page: number) => {
    setPage(page);
  }

  const getVisibleProducts = (page: number) => {
    const itemsPerPage = 6;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return productsByCategory.slice(startIndex, endIndex);
  }

  const visibleProducts = getVisibleProducts(page);

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
              <Product key={product.id} product={product} />
            ))}
          </Grid>

          {productsByCategory.length > 6 && (
            <Box
              display={'flex'}
              justifyContent={'center'}
            >
              <ProductsPagination 
                count={count}
                handlePageChange={handlePageChange}
              /> 
            </Box>
          )}
        </>
        )}
        {/* {visibleProducts.length === 0 && !loading
          ? <p style={{marginTop: '20px'}}>There are no products matching the current search criteria</p>
          : (
            
          )
        } */}
      </Box>
    </Grid>
  )
}
