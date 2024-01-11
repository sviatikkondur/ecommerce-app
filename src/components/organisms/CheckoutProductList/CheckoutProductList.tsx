import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { CartProductList } from '../CartProducts/CartProductList'

export const CheckoutProductList = () => {
  const theme = useTheme();
  const isTabletScreen = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <>
      <Typography 
          variant='h5' 
          fontWeight={600}
          marginTop={2}
        >
          Your Products:
        </Typography>

      <Box
        maxHeight={isTabletScreen ? '28vh' : '50vh'}
        overflow={'auto'}
        sx={{
          overflow:"auto",
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            width: '0.2em',
          },
          '&::-webkit-scrollbar-track': {
            background: "#f1f1f1",
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#888',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#555'
          }
        }}
        marginTop={3}
      >
        <Box
          width={'100%'}
        > 
          <CartProductList checkout={true} />
        </Box>
      </Box>
    </>
  )
}
