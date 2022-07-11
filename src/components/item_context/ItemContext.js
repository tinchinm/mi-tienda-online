import React, { createContext, useState } from "react";

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cantidad, setCantidad] = useState(0);
  const [totalCompra, setTotalCompra] = useState();

  return (
    <ItemContext.Provider value={[cart, setCart, cantidad, setCantidad, totalCompra, setTotalCompra]}>
      {children}
    </ItemContext.Provider>
  );
};
