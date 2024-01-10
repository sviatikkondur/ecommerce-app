import { Box, Button } from '@mui/material'
import React from 'react'
import { ErrorMessage } from '../../atoms/ErrorMessage/ErrorMessage'

type Props = {
  error: string,
}

export const Error: React.FC<Props> = ({error}) => {
  return (
    <Box
      height={'100%'}
      display={'flex'}
      flexDirection={'column'}
      gap={3}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <ErrorMessage message={error} />
      <Button 
        variant='contained' 
        color='error'
        onClick={() => window.location.reload()}
      >
        Try Again
      </Button>
    </Box>
  )
}
