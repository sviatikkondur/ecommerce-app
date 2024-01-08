import { Typography } from '@mui/material'
import React from 'react'

export const ProductsTitle: React.FC = () => {
  return (
    <Typography
        variant='h5'
        fontWeight={600}
        marginLeft={1}
        marginBottom={2}
      >
        Products:
      </Typography>
  )
}
