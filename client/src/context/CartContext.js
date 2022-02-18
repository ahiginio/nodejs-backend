import React, { createContext, useState } from "react";
import axios from "axios";

const CartContext = createContext();
const { Provider } = CartContext;

//Setting del provider del context
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(localStorage.getItem('cartId'))
  return (
    <Provider
      value={{
        cart, setCart
      }}
    >
      {children}
    </Provider>
  );
};

export { CartContext, CartProvider };
