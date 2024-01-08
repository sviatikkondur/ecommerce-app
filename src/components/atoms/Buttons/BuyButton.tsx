import { Button } from '@mui/material'
import React from 'react'

export const BuyButton: React.FC = () => {
  return (
    <Button 
      variant="contained"
      size='medium'
      sx={{
        marginTop: 1,
        backgroundColor: '#414141',
        ':hover': {
          bgcolor: '#595959',
        },
      }}
    >
      Buy
    </Button>
)
}
