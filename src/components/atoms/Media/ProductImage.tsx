import { CardMedia } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

type Props = {
  image: string;
  id: number;
} 

export const ProductImage: React.FC<Props> = ({image, id}) => {
  const navigate = useNavigate();

  return (
    <CardMedia
      component="img"
      height={160}
      sx={{ 
        objectFit: 'contain', 
        margin: '0 auto', 
        cursor: 'pointer'
      }}
      image={image}
      alt="Product image"
      onClick={() => navigate(`/products/${id}`)}
    />
  )
}
