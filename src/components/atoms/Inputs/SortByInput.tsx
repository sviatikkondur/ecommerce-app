import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import React, { ChangeEvent } from 'react'
import { SortBy } from '../../../types/SortBy';
import { useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../../utils/searchHelper';

export const SortByInput: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get('sort') || 'A-Z';

  const handleSortChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedCategory = e.target.value;

    if (selectedCategory === 'A-Z') {
      const newParams = getSearchWith(searchParams, { sort: null });
      setSearchParams(newParams);
    } else {
      const newParams = getSearchWith(searchParams, { sort: selectedCategory });
      setSearchParams(newParams);
    }
  };
  return (
    <RadioGroup
          aria-label="categories"
          name="categories"
          value={sortBy}
          onChange={handleSortChange}
        >
          {Object.values(SortBy).map(option => (
            <FormControlLabel
              key={option}
              value={option}
              control={<Radio />}
              label={option}
            />
          ))}
      </RadioGroup>
  )
}
