import { Box, Button, Divider, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useMemo } from 'react'
import { useAppSelector } from '../../../hooks/useTypedSelector';
import { useNavigate } from 'react-router-dom';

export const CartCheckout = () => {
  const { cart } = useAppSelector(state => state.cartSlice);
  const navigate = useNavigate();

  const theme = useTheme();
  const isTabletScreen = useMediaQuery(theme.breakpoints.down('lg'));

  const totalPrice = useMemo(() => {
  return cart.reduce((acc, phone) => {
    return acc + phone.price * phone.amount;
  }, 0);
}, [cart]);

  const totalItems = useMemo(() => {
    return cart.reduce((acc, phone) => acc + phone.amount, 0);
  }, [cart]);


  const handleCheckoutClick = () => {
    navigate('/cart/checkout', { replace: true });
  };


  return (
    <Grid 
      item
      marginTop={3}
      paddingLeft={isTabletScreen ? 0 : 4}
      lg={4}
      xs={12}
    >
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        padding={'30px'}
        border={'1px solid #c2c9d6'}
        borderRadius={2}
      >
        <Typography
          variant='h4'
          fontWeight={700}
        >
          {totalPrice.toFixed(2)}$
        </Typography>

        <Typography
          variant='body1'
          marginTop={1}
          sx={{
            color: '#89939a'
          }}
        >
          Total for {totalItems} {totalItems === 1 ? 'item' : 'items'}
        </Typography>

        <Divider
          sx={{
            width: '100%',
            marginTop: 3
          }}
        />
        
        <Button
          variant='contained'
          size='large'
          sx={{
            width: '100%',
            marginTop: 3
          }}
          onClick={handleCheckoutClick}
        >
          Checkout
        </Button>
      </Box>
    </Grid>
  )
}
