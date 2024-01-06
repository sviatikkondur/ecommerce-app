import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Product } from '../../molecules/Product/Product';
import { TProduct } from '../../../types/Product';
import { getProducts } from '../../../api/products';

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
    <Grid item sm={9}>
      <Grid container spacing={2}>
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </Grid>
    </Grid>
  )
}
