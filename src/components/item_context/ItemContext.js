import React, {createContext, useState} from "react";

export const ItemContext = createContext();

const initialState = [];

export const ItemProvider = ({children}) => {

    const [cart, setCart] = useState(initialState);
    const [cantidad, setCantidad] = useState(0)

    return <ItemContext.Provider value={[cart, setCart, cantidad, setCantidad]}>
            {children}
           </ItemContext.Provider>
        
}