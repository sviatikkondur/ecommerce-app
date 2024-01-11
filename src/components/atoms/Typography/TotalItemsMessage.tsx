import { Typography } from '@mui/material'
import React from 'react'

type Props = {
  totalItems: number
}

export const TotalItemsMessage: React.FC<Props> = ({ totalItems }) => {
  return (
    <Typography
      variant='body1'
      marginTop={1}
      sx={{
        color: '#89939a'
      }}
    >
      Total for {totalItems} {totalItems === 1 ? 'item' : 'items'}
    </Typography>
  )
}
