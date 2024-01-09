import { Alert, Typography } from '@mui/material';
import React from 'react'

type Props = {
  message: string;
}

export const ErrorMessage: React.FC<Props> = ({message}) => {
  return (
    <Alert 
      variant='filled' 
      severity='error'
      sx={{
        width: 'fit-content',
        height: 'fit-content',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Typography>
        Something went wrong!
        <br />
        Error message: {message}
      </Typography>
    </Alert>
  )
}
