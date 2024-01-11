import { Container, Grid } from '@mui/material'
import React from 'react'
import { CartTitle } from '../components/atoms/Typography/CartTitle'
import { CartProductList } from '../components/organisms/CartProducts/CartProductList'
import { CartCheckout } from '../components/organisms/CartCheckout/CartCheckout'
import { useAppSelector } from '../hooks/useTypedSelector'
import { EmptyCart } from '../components/molecules/EmptyCart/EmptyCart'

export const CartPage = () => {
  const { cart } = useAppSelector(state => state.cartSlice);

  const isEmpty = cart.length === 0;

  return (
    <Container maxWidth="lg" sx={{padding: '20px 20px 60px'}}>
      {!isEmpty && (
        <>
          <CartTitle />

          <Grid container>
            <CartProductList checkout={false} />
            <CartCheckout />
          </Grid>
        </>
      )}

      {isEmpty && (
        <EmptyCart />
      )}
    </Container>
  )
}
