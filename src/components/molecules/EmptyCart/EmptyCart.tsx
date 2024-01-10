import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useNavigate } from 'react-router-dom';

export const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <Box
      height={'100%'}
      display={'flex'}
      flexDirection={'column'}
      padding={1}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <ShoppingBasketIcon fontSize='large'/>
      <Typography
        variant='h4'
      >
        Your cart is empty
      </Typography>

      <Typography 
        variant='body2'
        marginTop={2}
      >
        You can add an item to your cart by clicking Add to cart button
      </Typography>
      <Button
        sx={{
          marginTop: 2
        }}
        onClick={() => navigate('/')}
      >
        Explore the Catalog
      </Button>
    </Box>
  )
}
