import { Box, Grid } from '@mui/material'
import React from 'react'
import { useAppSelector } from '../../../hooks/useTypedSelector'
import { CartProductCard } from '../../molecules/CartProductCard/CartProductCard';

export const CartProductList = () => {
  const { cart } = useAppSelector(state => state.cartSlice);

  return (
    <Grid 
      item 
      xs={12} 
      lg={8}
    >
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={2}
        marginTop={3}
      >
        {cart.map(product => (
          <CartProductCard key={product.id} product={product}/>
        ))}
      </Box>
    </Grid>
  )
}
