import { Box, Divider, Grid, useMediaQuery, useTheme } from '@mui/material'
import React, { useMemo } from 'react'
import { useAppSelector } from '../../../hooks/useTypedSelector';
import { useNavigate } from 'react-router-dom';
import { CheckoutButton } from '../../atoms/Buttons/CheckoutButton';
import { TotalItemsMessage } from '../../atoms/Typography/TotalItemsMessage';
import { TotalPrice } from '../../atoms/Typography/TotalPrice';

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
        <TotalPrice totalPrice={totalPrice}/>

        <TotalItemsMessage totalItems={totalItems}/>

        <Divider
          sx={{
            width: '100%',
            marginTop: 3
          }}
        />
        
        <CheckoutButton handleCheckoutClick={handleCheckoutClick}/>
      </Box>
    </Grid>
  )
}
