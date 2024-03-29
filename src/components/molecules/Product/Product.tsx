import { Card, CardContent, Divider, Grid } from '@mui/material'
import React from 'react'
import { TProduct } from '../../../types/Product'
import { ProductImage } from '../../atoms/Media/ProductImage';
import { ProductName } from '../../atoms/Typography/ProductName';
import { ProductCategory } from '../../atoms/Typography/ProductCategory';
import { ProductPrice } from '../../atoms/Typography/ProductPrice';
import { BuyButton } from '../../atoms/Buttons/BuyButton';

type Props = {
  product: TProduct
  handleToastOpen: () => void
};

export const Product:React.FC<Props> = ({product, handleToastOpen}) => {

  return (
    <Grid item key={product.title} xs={12} sm={6} md={4}>
      <Card 
        sx={{ 
          maxWidth: 340, 
          margin: '0 auto', 
          '@media (max-width: 400px)': { maxWidth: 240 }
        }}
      >
        <CardContent sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
        >
          <ProductImage image={product.image} id={product.id} />

          <ProductName title={product.title} id={product.id} />

          <Divider sx={{ marginTop: 2 }} />

          <ProductCategory category={product.category} />

          <ProductPrice price={product.price} />
          
          <BuyButton product={product} handleToastOpen={handleToastOpen}/>
        </CardContent>
      </Card>
    </Grid>
  )
}
