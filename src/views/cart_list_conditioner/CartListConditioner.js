import React, {useContext} from 'react'
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

//   Components
import { ItemContext } from "../../components/item_context/ItemContext";
import './CartListConditioner.css'
import CartList from '../../components/cart_list/CartList'

const CartListConditioner = () => {
    
    const [cart] = useContext(ItemContext);
    return (
      <div>
        {cart.length === 0 ? <div className='contenedor'><h2>Aun no se han agregado elementos a su carrito</h2>
            <Link to='/tienda'><Button className='boton' variant="contained">Volver</Button></Link>
        </div>
        : <CartList />
        }
     </div>
  )
}

export default CartListConditioner