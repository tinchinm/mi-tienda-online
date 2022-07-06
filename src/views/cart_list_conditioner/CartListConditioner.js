import React, {useContext} from 'react'
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

//   Components
import { ItemContext } from "../../components/item_context/ItemContext";
import CartList from '../../components/cart_list/CartList'

const CartListConditioner = () => {
    
    const [cart] = useContext(ItemContext);
    console.log(cart);
    return (
      <div>
        {cart === [] ? <div><h1>Aun no se han agregado elementos a su carrito</h1>
            <Link to='/tienda'><Button variant="contained">Volver</Button></Link>
        </div>
        : <CartList />
        }
     </div>
  )
}

export default CartListConditioner