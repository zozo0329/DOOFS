import React from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const addHandler = () => {};
  const removeHandler = () => {};
  const contextValue = {
    items: [],
    totalAmount: 0,
    addItem: addHandler,
    removeItem: removeHandler,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
