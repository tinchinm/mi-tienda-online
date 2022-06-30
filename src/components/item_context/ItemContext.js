import React, {createContext, useState} from "react";

export const ItemContext = createContext();

const initialState = [];

export const ItemProvider = ({children}) => {

    const [cart, setCart] = useState(initialState);

    return <ItemContext.Provider value={[cart, setCart]}>
            {children}
           </ItemContext.Provider>
        
}