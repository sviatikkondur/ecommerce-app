import { CardMedia } from '@mui/material'
import React from 'react'

type Props = {
  image: string;
  id: number;
} 

export const ProductImage: React.FC<Props> = ({image, id}) => {
  return (
    <CardMedia
      component="img"
      height={160}
      sx={{ 
        objectFit: 'contain', 
        margin: '0 auto' 
      }}
      image={image}
      alt="Product image"
      onClick={() => console.log('open product' + id)}
    />
  )
}
