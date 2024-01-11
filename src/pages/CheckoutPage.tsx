import { Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CheckoutProductList } from '../components/organisms/CheckoutProductList/CheckoutProductList';
import { CheckoutForm } from '../components/organisms/CheckoutForm/CheckoutForm';
import { SuccessMessage } from '../components/organisms/SuccessMessage/SuccessMessage';
import { useAppSelector } from '../hooks/useTypedSelector';
import { EmptyCart } from '../components/molecules/EmptyCart/EmptyCart';

export const CheckoutPage = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const { cart } = useAppSelector(state => state.cartSlice);
  const isEmpty = cart.length === 0;

  const handleSuccess = () => {
    setIsSuccess(true);
  }

  return (
    <Container 
      maxWidth="lg" 
      sx={{
        padding: '20px 20px 60px',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {!isSuccess && !isEmpty && (
        <>
          <Typography
            variant='h3' 
            fontWeight={700}
          >
            Checkout
          </Typography>
            
          <CheckoutForm handleSuccess={handleSuccess}/>
          <CheckoutProductList />
        </>
      )}

      {isSuccess && (<SuccessMessage />)}

      {!isSuccess && isEmpty && (<EmptyCart />)}
    </Container>
  )
}
