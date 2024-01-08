import { Box, Grid, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useState, ChangeEvent } from 'react'
import { getCategories } from '../../../api/categories';
import { FilterTitle } from '../../atoms/Typography/FilterTitle';
import { CategoriesRadio } from '../../atoms/Inputs/CategoriesRadio';
import { CategoryTitle } from '../../atoms/Typography/CategoryTitle';
import { SortTitle } from '../../atoms/Typography/SortTitle';
import { SortBy } from '../../../types/SortBy';
import { SortByInput } from '../../atoms/Inputs/SortByInput';

export const Filters: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('electronics');
  const [sortBy, setSortBy] = useState(SortBy.Name);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleSortChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSortBy(e.target.value as SortBy);
  };

  useEffect(() => {
    const loadCategories = async () => {
      const data = await getCategories();

      setCategories(data);
    };

    loadCategories();
  }, []);

  return (
    <Grid item sm={3} xs={12}>
        <FilterTitle />

      <Box
        display={'flex'}
        flexDirection={isSmallScreen ? 'row' : 'column'}
        justifyContent={'center'}
      >
        <Box marginTop={2}>
          <CategoryTitle />
          <CategoriesRadio 
            categories={categories}
            selectedCategory={selectedCategory}
            handleChange={handleFilterChange}
          /> 
        </Box>
      
        <Box marginTop={2}>
          <SortTitle />

          <SortByInput 
            sortBy={sortBy}
            handleChange={handleSortChange}
          /> 
        </Box>
      </Box>
    </Grid>
  )
}
