import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import React, { ChangeEvent } from 'react'
import { useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../../utils/searchHelper';
import lodash from 'lodash';

type Props = {
  categories: string[],
}

export const CategoriesRadio: React.FC<Props> = ({
  categories,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category') || 'all';

  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedCategory = e.target.value;

    if (selectedCategory === 'all') {
      const newParams = getSearchWith(searchParams, { category: null, page: null });
      setSearchParams(newParams);
    } else {
      const newParams = getSearchWith(searchParams, { category: selectedCategory, page: null });
      setSearchParams(newParams);
    }
  };

  return (
    <RadioGroup
          aria-label="categories"
          name="categories"
          value={category}
          onChange={handleCategoryChange}
        >
          {categories.map(category => (
            <FormControlLabel
              key={category}
              value={category}
              control={<Radio />}
              label={lodash.capitalize(category)}
            />
          ))}
      </RadioGroup>
  )
}
