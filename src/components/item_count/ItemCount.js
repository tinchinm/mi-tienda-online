import { useState } from 'react'
import './ItemCount.css'

const Counter = (props) => {

    let stock = props.stk;

    const[contador, setContador] = useState(0)

    const sumarContador = () =>{
        if (stock =! 0 && contador < stock) {
        setContador(contador + 1)    
        }else{
            alert("No hay mas stock")
        }
    };

    const restarContador = () =>{
        if (contador >= 1){
        setContador(contador - 1)
         } else {};
    };

    return(
        <div className='contador'>
            <p> Cantidad: {contador} </p>
            <div className='botones'>
                <button onClick={restarContador}>-</button>
                <button onClick={sumarContador}>+</button>
            </div>
        </div>
    )
}

export default Counter;