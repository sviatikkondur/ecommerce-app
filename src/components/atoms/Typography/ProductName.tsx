import { Typography } from '@mui/material'
import React from 'react'

type Props = {
  id: number,
  title: string,
}

export const ProductName: React.FC<Props> = ({title, id}) => {
  return (
    <Typography 
      variant="subtitle1" 
      marginTop={2}
      lineHeight={1.2}
      fontWeight={700}
      style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
      title={title}
      onClick={() => console.log('open product' + id)}
    >
      {title}
    </Typography>
  )
}
