import { Box } from '@mui/material';
import React from 'react'

type Props = {
  image: string;
}

export const CartProductImage: React.FC<Props> = ({image}) => {
  return (
    <Box 
      component='img'
      src={image}
      width={60}
      height={70}
      marginRight={'20px'}
      sx={{
        objectFit: 'contain'
      }}
    />
  )
}
