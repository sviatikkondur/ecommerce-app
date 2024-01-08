import { Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

type Props = {
  id: number,
  title: string,
}

export const ProductName: React.FC<Props> = ({title, id}) => {
  const navigate = useNavigate();

  return (
    <Typography 
      variant="subtitle1" 
      marginTop={2}
      lineHeight={1.2}
      fontWeight={700}
      style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
      title={title}
      onClick={() => navigate(`/products/${id}`)}
      sx={{cursor: 'pointer'}}
    >
      {title}
    </Typography>
  )
}
