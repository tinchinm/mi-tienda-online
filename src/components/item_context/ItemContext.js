import React, { createContext, useState } from "react";

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cantidad, setCantidad] = useState(0);

  return (
    <ItemContext.Provider value={[cart, setCart, cantidad, setCantidad]}>
      {children}
    </ItemContext.Provider>
  );
};
