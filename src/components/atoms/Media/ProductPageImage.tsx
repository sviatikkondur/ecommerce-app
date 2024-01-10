import { Box, Grid } from '@mui/material'
import React from 'react'

type Props = {
  image: string;
  alt: string;
} 

export const ProductPageImage: React.FC<Props> = ({image, alt}) => {
  return (
    <Grid item sm={5}>
      <Box 
        component="img" 
        width={'100%'}
        maxHeight={'78vh'}
        alt={alt}
        src={image}
      />
    </Grid>
  )
}
