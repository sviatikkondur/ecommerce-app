import { Pagination, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

type Props = {
  count: number;
};

export const ProductsPagination: React.FC<Props> = ({ count }) => {
  const pagesCount = Math.ceil(count / 6);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Pagination
      count={pagesCount}
      variant='outlined'
      shape='rounded'
      color='primary'
      size={isSmallScreen ? 'small' : 'medium'}
      sx={{
        marginTop: '32px',
      }}
    />
  );
};
