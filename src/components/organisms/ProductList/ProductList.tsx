import { Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Product } from '../../molecules/Product/Product';
import { TProduct } from '../../../types/Product';
import { getProducts } from '../../../api/products';
import { ProductsTitle } from '../../atoms/Typography/ProductsTitle';
import { ProductsPagination } from '../../atoms/Pagination/ProductsPagination';

export const ProductList: React.FC = () => {
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await getProducts(6);

      setProducts(data);
    };

    loadProducts()
  }, []);

  return (
    <Grid item sm={9} xs={12}>
      <ProductsTitle />

      <Grid container spacing={2}>
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </Grid>

      <Box
        display={'flex'}
        justifyContent={'center'}
      >
        <ProductsPagination count={45} /> 
      </Box>
    </Grid>
  )
}
