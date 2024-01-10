import { Box, CircularProgress } from '@mui/material'
import React from 'react'

export const ProductPageLoader = () => {
  return (
    <Box 
      height={'100%'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <CircularProgress 
        size={160}
      />
    </Box>
  )
}
