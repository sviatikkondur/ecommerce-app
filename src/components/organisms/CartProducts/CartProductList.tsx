import { Box, Grid } from '@mui/material'
import React from 'react'
import { useAppSelector } from '../../../hooks/useTypedSelector'
import { CartProductCard } from '../../molecules/CartProductCard/CartProductCard';

type Props = {
  checkout: boolean,
}

export const CartProductList: React.FC<Props> = ({ checkout }) => {
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
        marginTop={checkout ? 0 : 3}
      >
        {cart.map(product => (
          <CartProductCard key={product.id} product={product} checkout={checkout}/>
        ))}
      </Box>
    </Grid>
  )
}
