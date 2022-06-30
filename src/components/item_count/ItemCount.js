import { useState, useContext } from "react";
import "./ItemCount.css";

//  Components
import { ItemContext } from '../item_context/ItemContext';

const Counter = ({item}) => {
  let stock = item.stock;

  const [cart, setCart] = useContext(ItemContext)

  const [contador, setContador] = useState(0);

  const sumarContador = () => {
        stock =!0 && contador < stock
        ?  setContador(contador + 1)
        :  alert("No hay mas stock");
  };

  const restarContador = () => {
        contador >= 1 
        && setContador(contador - 1)
    
  };
  
  let carrito = cart

  const agregarAlCarrito = () => {

    if (carrito.indexOf(item.id) === -1) {
      
      carrito.push(item)
      let element = carrito.find(element => element.id === item.id)
      element.cant = contador
      setCart(carrito)
    }else if(carrito.indexOf(item.id) === 1){
      
      let element = carrito.find(element => element.id === carrito.id)
      element.cant = contador
      carrito.push(item)
      setCart(carrito);
    } else{}
  };
console.log(cart);
  return (
    <div className="contador">
      <p> Cantidad: {contador} </p>
      <div className="botones">
        <button onClick={restarContador}>-</button>
        <button onClick={sumarContador}>+</button>
      </div>
      <div>
        <button onClick={agregarAlCarrito}>Agregar al Carrito</button>
      </div>
    </div>
  );
};

export default Counter;
