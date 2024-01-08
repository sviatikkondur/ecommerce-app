import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import React, { ChangeEvent } from 'react'
import { SortBy } from '../../../types/SortBy';

type Props = {
  sortBy: SortBy,
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
};

export const SortByInput: React.FC<Props> = ({sortBy, handleChange}) => {
  return (
    <RadioGroup
          aria-label="categories"
          name="categories"
          value={sortBy}
          onChange={handleChange}
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
