import { Box, CircularProgress, Grid, IconButton, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { FilterTitle } from '../../atoms/Typography/FilterTitle';
import { CategoriesRadio } from '../../atoms/Inputs/CategoriesRadio';
import { CategoryTitle } from '../../atoms/Typography/CategoryTitle';
import { SortTitle } from '../../atoms/Typography/SortTitle';
import { SortByInput } from '../../atoms/Inputs/SortByInput';
import { useAppDispatch, useAppSelector } from '../../../hooks/useTypedSelector';
import { getCategories } from '../../../store/categories/categoriesSlice';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const Filters: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isBoxOpen, setIsBoxOpen] = useState(false);

  const {
    categories,
    loading
  } = useAppSelector(state => state.categoriesSlice);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleToggleBox = () => {
    setIsBoxOpen((prevIsBoxOpen: boolean) => !prevIsBoxOpen);
  };

  return (
    <Grid 
      item 
      sm={3} 
      xs={12} 
      marginBottom={3}
      display={loading ? 'flex' : 'unset'}
      justifyContent={loading ? 'center' : ''}
      alignItems={loading ? 'center' : ''}
      >
        {loading
          ? <CircularProgress size={60}/>
          : (
            <>
              <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-between'}
                border={isSmallScreen ? '1px solid #c0c0c0' : ''}
                borderRadius={'10px'}
                paddingLeft={isSmallScreen ? '16px' : ''}
                onClick={handleToggleBox}
              >
                <FilterTitle />

                {isSmallScreen && (
                  <IconButton>
                    {isBoxOpen ? <RemoveIcon fontSize='large'/> : <AddIcon fontSize='large'/>}
                  </IconButton>
                )}
              </Box>

            <Box
              display={'flex'}
              flexDirection={isSmallScreen ? 'row' : 'column'}
              justifyContent={isSmallScreen ? 'space-around' : 'flex-start'}
              height={(isSmallScreen && isBoxOpen) || !isSmallScreen ? '100%' : '0px'}
              overflow={'hidden'}
            >
              <Box marginTop={2}>
                <CategoryTitle />
                <CategoriesRadio 
                  categories={categories as string[]}
                />
              </Box>
            
              <Box marginTop={2}>
                <SortTitle />

                <SortByInput/> 
              </Box>
            </Box>
            </>
          )
        }
    </Grid>
  )
}
