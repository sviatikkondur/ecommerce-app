import { Pagination, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../../utils/searchHelper';

type Props = {
  count: number;
};

export const ProductsPagination: React.FC<Props> = ({ count }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const pagesCount = Math.ceil(count / 6);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    const newParams = getSearchWith(
      searchParams, 
      { page: page === 1 ? null : String(page) }
    );
    setSearchParams(newParams);
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
