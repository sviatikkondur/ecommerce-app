import { Typography } from '@mui/material';
import React from 'react'

type Props = {
  price: number;
};

export const ProductPrice: React.FC<Props> = ({price}) => {
  return (
    <Typography 
      variant="body2" 
      color="black"
      marginTop={1}
      fontWeight={600}
    >
      Price: {price}$
    </Typography>
  )
}
