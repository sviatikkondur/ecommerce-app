import { Box, Grid, Rating, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { TProduct } from '../../../types/Product'
import { BuyButton } from '../../atoms/Buttons/BuyButton'

type Props = {
  product: TProduct,
  handleToast: () => void,
}

export const ProductDescription: React.FC<Props> = ({product, handleToast}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid 
      item sm={7} 
      paddingLeft={isSmallScreen ? 0 : 6}
      marginTop={isSmallScreen ? 2 : 0}
    >
      <Box>
        <Typography variant={isSmallScreen ? 'h5' : 'h4'}>
          {product?.title}
        </Typography>

        <Box 
          display={'flex'} 
          marginTop={2}
          gap={1}
          alignItems={"center"}
        >
          <Typography variant='h6'>
            Category:
          </Typography>

          <Typography>
            {product?.category}
          </Typography>
        </Box>

        <Box 
          display={'flex'} 
          flexDirection={"row"}
          gap={2} 
          alignItems={"center"} 
          marginTop={2}
        >
          <Typography variant='h6'>
            Price: {product?.price}$
          </Typography>

          {product && <BuyButton product={product} handleToastOpen={handleToast} />}
        </Box>

        {product && (
          <Box 
            display={'flex'} 
            alignItems={"center"} 
            marginTop={2}
            gap={1}
          >
            <Typography variant='h6'>
              Rating:
            </Typography>
            <Rating name="read-only" value={product?.rating.rate} readOnly />
          </Box>
        )}
      </Box>

      <Typography variant='h6' marginTop={2}>
        Description:
      </Typography>

      <Typography 
        variant='body1'
      >
        {product?.description}
      </Typography>
    </Grid>
  )
}
