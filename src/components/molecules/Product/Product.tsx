import { Button, Card, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { TProduct } from '../../../types/Product'

type Props = {
  product: TProduct
};

function normalizeText(inputText: string, maxLength = 60) {
  if (inputText.length > maxLength) {
    return inputText.substring(0, maxLength - 3) + '...';
  }
  return inputText;
}

export const Product:React.FC<Props> = ({product}) => {

  const normalizedTitle = normalizeText(product.title);

  return (
    <Grid item key={product.title} xs={12} sm={6} md={4}>
            <Card>
              <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
              >
                <CardMedia
                  component="img"
                  height={165}
                  sx={{ 
                    objectFit: 'contain', 
                    margin: '0 auto' 
                  }}
                  image={product.image}
                  alt="Product image"
                />
                <Typography 
                  variant="subtitle1" 
                  marginTop={2}
                  lineHeight={1.2}
                  height={45}
                  fontWeight={700}
                  title={product.title}
                >
                  {normalizedTitle}
                </Typography>
                <Divider sx={{ marginTop: 2 }} />
                <Typography 
                  variant="body2" 
                  color="textSecondary"
                  marginTop={1}
                >
                  Category: {product.category}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="black"
                  marginTop={1}
                  fontWeight={600}
                >
                  Price: {product.price}$
                </Typography>
                <Button 
                  variant="contained"
                  size='medium'
                  sx={{
                    marginTop: 1,
                    backgroundColor: '#414141',
                    ':hover': {
                      bgcolor: '#595959',
                    },
                  }}
                >
                  Buy
                </Button>
              </CardContent>
            </Card>
          </Grid>
  )
}
