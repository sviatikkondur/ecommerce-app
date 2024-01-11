import { Box, Button, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const SuccessMessage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate('/', { replace: true });
    }, 3000);

    return () => clearTimeout(timeoutId);

  }, [navigate]);

  return (
    <Box
      height={'100%'}
      display={'flex'}
      flexDirection={'column'}
      padding={1}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Typography
        variant='h4'
      >
        Thank you for shopping with us
      </Typography>

      <Typography 
        variant='body2'
        marginTop={2}
      >
        Our sales manager will contact you shortly
      </Typography>
      <Button
        sx={{
          marginTop: 2
        }}
        onClick={() => navigate('/')}
      >
        Go Home
      </Button>
    </Box>
  )
}
