import { Pagination, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

type Props = {
  count: number;
  handlePageChange: (page: number) => void;
};

export const ProductsPagination: React.FC<Props> = ({ count, handlePageChange }) => {
  const pagesCount = Math.ceil(count / 6);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    handlePageChange(page);
  };

  return (
    <Pagination
      count={pagesCount}
      variant='outlined'
      shape='rounded'
      color='primary'
      size={isSmallScreen ? 'small' : 'medium'}
      onChange={handleChange}
      sx={{
        marginTop: '32px',
      }}
    />
  );
};
