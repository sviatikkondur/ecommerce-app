import { Grid, Typography } from '@mui/material'
import React from 'react'

export const CartTitle = () => {
  return (
    <Grid item sm={12}>
      <Typography variant='h3' fontWeight={700}>
        Cart
      </Typography>
    </Grid>
  )
}
