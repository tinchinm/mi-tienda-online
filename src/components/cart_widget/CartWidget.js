import * as React from 'react';
import Badge from '@mui/material/Badge';
import ShopIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
  return (
    <Badge badgeContent={4} color="primary">
      <ShopIcon color="action" />
    </Badge>
  );
}

export default CartWidget;