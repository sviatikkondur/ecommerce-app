import { Button } from '@mui/material'
import React from 'react'

type Props = {
  handleCheckoutClick: () => void
}

export const CheckoutButton: React.FC<Props> = ({ handleCheckoutClick }) => {
  return (
    <Button
      variant='contained'
      size='large'
      sx={{
        width: '100%',
        marginTop: 3
      }}
      onClick={handleCheckoutClick}
    >
      Checkout
    </Button>
  )
}
