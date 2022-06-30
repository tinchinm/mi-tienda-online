import React, {useContext} from 'react';
import Badge from '@mui/material/Badge';
import ShopIcon from '@mui/icons-material/ShoppingCart';

//  Components
import { ItemContext } from '../item_context/ItemContext';

/* const [cart] = useContext(ItemContext)

const SumarCantidades = () => {

} */

const CartWidget = () => {
  return (
    <Badge badgeContent={5} color="primary">
      <ShopIcon color="action" />
    </Badge>
  );
}

export default CartWidget;