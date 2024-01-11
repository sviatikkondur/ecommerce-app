import { Typography } from '@mui/material'
import React from 'react'

type Props = {
  totalPrice: number
}

export const TotalPrice: React.FC<Props> = ({ totalPrice }) => {
  return (
    <Typography
      variant='h4'
      fontWeight={700}
    >
      {totalPrice.toFixed(2)}$
    </Typography>
  )
}
