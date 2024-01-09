import { Typography } from '@mui/material'
import React from 'react'

type Props = {
  category: string;
}

export const ProductCategory: React.FC<Props> = ({category}) => {
  return (
    <Typography 
      variant="body2" 
      color="textSecondary"
      marginTop={1}
      title={category}
      noWrap
    >
      Category: {category}
    </Typography>
  )
}
