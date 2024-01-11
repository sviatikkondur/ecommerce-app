import React from 'react'
import { ProductWithAmount } from '../../../types/Product'
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material'
import { CartProductTitle } from '../../atoms/Typography/CartProductTitle'
import CloseIcon from '@mui/icons-material/Close';
import { CartProductImage } from '../../atoms/Media/CartProductImage';
import { ProductQuantity } from '../../atoms/Inputs/ProductQuantity';
import { useAppDispatch } from '../../../hooks/useTypedSelector';
import { actions } from '../../../store/cart/cartSlice';

type Props = {
  product: ProductWithAmount
  checkout: boolean
}

export const CartProductCard: React.FC<Props> = ({product, checkout}) => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      display={'flex'}
      flexDirection={isSmallScreen ? 'column' : 'row'}
      justifyContent={'space-between'}
      alignContent={'center'}
      gap={isSmallScreen ? 2 : 0}
      padding={2}
      borderRadius={2}
      border={'1px solid #c2c9d6'}
      height={isSmallScreen ? '100%' : 90}
    >
      <Box
        display={'flex'}
        alignItems={'center'}
        maxWidth={isSmallScreen ? '100%' : '60%'}
        paddingLeft={checkout ? '20px' : '0'}
      >
        {!checkout && (
          <Button 
            color='error'
            onClick={() => dispatch(actions.remove(product.id))}
            sx={{
              '&:hover': { backgroundColor: 'transparent' }
            }} 
          >
            <CloseIcon />
          </Button>
        )}
        <CartProductImage image={product.image} />
        <CartProductTitle title={product.title} />
      </Box>

      <Box 
          display={'flex'}
          alignItems={'center'}
          gap={4}
          justifyContent={'space-between'}
        >
          {!checkout && (
            <ProductQuantity 
              id={product.id}
              max={product.rating.count}
              quantity={product.amount}
            />
          )}
          <Typography
            width={70}
            variant='h6'
          >
            {product.price}$
          </Typography>
        </Box>
    </Box>
  )
}
