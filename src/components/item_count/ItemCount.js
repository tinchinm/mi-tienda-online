import { useState, useContext } from "react";
import "./ItemCount.css";

//  Components
import { ItemContext } from '../item_context/ItemContext';

const Counter = ({item}) => {
  let stock = item.stock;
  
  // eslint-disable-next-line
  const [cart, setCart, cantidad, setCantidad] = useContext(ItemContext)

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
  
  let carrito

  cart !== []
  ? carrito = cart
  : carrito = []

  const agregarAlCarrito = () => {

    const cheq = carrito.find(elemento => elemento.id === item.id)
    if (cheq === undefined ) {
      carrito.push(item)
      let element = carrito.find(element => element.id === item.id)
      element.cant = contador
      setCart(carrito);
    }else if(cheq !== undefined){
      let elemento = carrito.find(elemento => elemento.id === item.id)
      elemento.cant = contador
      setCart(carrito);
    } else{}
    
    let cantidades = [];
    
    for (const elemento of cart) {
      cantidades.push(elemento.cant)
    }
    let suma = cantidades.reduce((ant, sig) => {
      return ant + sig;
    });
    setCantidad(suma);
  };
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
