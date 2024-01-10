import { Button } from '@mui/material'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/useTypedSelector'
import { TProduct } from '../../../types/Product';
import { actions } from '../../../store/cart/cartSlice';
import { useNavigate } from 'react-router-dom';

type Props = {
  product: TProduct;
  handleToastOpen?: () => void;
}

export const BuyButton: React.FC<Props> = ({ product, handleToastOpen }) => {
  const { cart } = useAppSelector(state => state.cartSlice);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isAdded = cart.find(item => +item.id === product.id);

  const handleAddToCart = (product: TProduct) => {
    if (!isAdded) {
      dispatch(actions.add(product));
      if (handleToastOpen) {
        handleToastOpen();
      }
    } else {
      navigate('/cart');
    }
  };

  return (
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
      onClick={() => handleAddToCart(product)}
    >
      {isAdded 
        ? 'Added to cart'
        : 'Buy'
      }
    </Button>
)
}
