import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import React, { ChangeEvent } from 'react'

type Props = {
  categories: string[],
  selectedCategory: string,
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

export const CategoriesRadio: React.FC<Props> = ({
  categories,
  selectedCategory,
  handleChange,
}) => {

  return (
    <RadioGroup
          aria-label="categories"
          name="categories"
          value={selectedCategory}
          onChange={handleChange}
        >
          {categories.map(category => (
            <FormControlLabel
              key={category}
              value={category}
              control={<Radio />}
              label={category}
            />
          ))}
      </RadioGroup>
  )
}
