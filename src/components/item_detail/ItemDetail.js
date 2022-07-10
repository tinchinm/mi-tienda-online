import React from "react";
import { useContext } from "react";
import Button from "@mui/material/Button";

// COMPONENTS
import './ItemDetail.css'
import { ItemContext } from '../item_context/ItemContext';

const ItemDetail = ({info}) => {
  
  // eslint-disable-next-line
  const [cart, setCart, cantidad, setCantidad] = useContext(ItemContext)

  let carrito

  cart !== []
  ? carrito = cart
  : carrito = []

  const agregarAlCarrito = () => {

    const cheq = carrito.find(elemento => elemento.id === info.id)
    if (cheq === undefined ) {
      carrito.push(info)
      let element = carrito.find(element => element.id === info.id)
      element.cant = element.cant + 1
      setCart(carrito);
    }else if(cheq !== undefined){
      let elemento = carrito.find(elemento => elemento.id === info.id)
      elemento.cant = elemento.cant + 1
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
      <div className='grid-container'>
          <div className='image'>
            <img src={`${info.image}`} alt="{info.name}" />
          </div>
          <div className='title'>
                {info.name}
          </div>
          <div className='price'>
              <strong>Precio:</strong> ${info.price} <br/>
              <Button className="button" variant="contained" onClick={agregarAlCarrito}>Agregar al carrito</Button>
          </div>
          <div className='description'>
              <strong>Información del Producto:</strong> <br/> {info.description}
              <br/><strong>Categoría:</strong> {info.categoria}
              <br/><strong>Stock Disponible:</strong> {info.stock}
          </div>
      </div>
  )
}

export default ItemDetail