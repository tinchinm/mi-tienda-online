import React, {useContext} from 'react';
import Badge from '@mui/material/Badge';
import ShopIcon from '@mui/icons-material/ShoppingCart';

//  Components
import { ItemContext } from '../item_context/ItemContext';

const CartWidget = () => {
  // eslint-disable-next-line
  const [cart, setCart, cantidad, setCantidad] = useContext(ItemContext)
  return (
    <Badge badgeContent={cantidad} color="primary">
      <ShopIcon color="action" />
    </Badge>
  );
}

export default CartWidget;