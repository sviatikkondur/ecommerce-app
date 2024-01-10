import { Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

type Props = {
  title: string
}

export const CartProductTitle: React.FC<Props> = ({ title }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Typography
      maxWidth={isSmallScreen ? '100%' : '23vw'}
      noWrap
      title={title}
    >
      {title}
    </Typography>
  )
}
