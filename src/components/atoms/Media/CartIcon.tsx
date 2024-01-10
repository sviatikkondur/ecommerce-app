import React from 'react';
import cartIcon from '../../../static/icons/Shopping_bag_Cart.svg';
import { Link } from 'react-router-dom';
import { Badge, Box } from '@mui/material';
import { useAppSelector } from '../../../hooks/useTypedSelector';

export const CartIcon: React.FC = () => {
  const { cart } = useAppSelector(state => state.cartSlice);

  const cartTotal = cart.length;

  return (
    <Link to="/cart">
      <Badge
        badgeContent={cartTotal}
        color="primary"
      >
        <Box
          component="img"
          sx={{
            height: 26,
          }}
          alt="cart icon"
          src={cartIcon}
        />
      </Badge>
    </Link>
  );
};
