import React, {useContext} from 'react';
import Badge from '@mui/material/Badge';
import ShopIcon from '@mui/icons-material/ShoppingCart';

//  Components
import { ItemContext } from '../item_context/ItemContext';

const CartWidget = () => {

  const [cantidad] = useContext(ItemContext)

  return (
    <Badge badgeContent={cantidad} color="primary">
      <ShopIcon color="action" />
    </Badge>
  );
}

export default CartWidget;