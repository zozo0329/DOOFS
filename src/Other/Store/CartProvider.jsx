import React, { useReducer } from "react";
import CartContext from "./CartContext";

const initialState = { items: [], totalAmount: 0 };
const cartReducer = (state, action) => {
  console.log(action, "ACTION");
  switch (action.type) {
    case "ADD_ITEM": {
      const addonsTotal = action.item.addons
        ? action.item.addons.reduce((sum, addon) => sum + addon.price, 0)
        : 0;

      const itemTotal = (action.item.price + addonsTotal) * action.item.amount;

      const updatedPrice = state.totalAmount + itemTotal;

      return {
        items: [...state.items, action.item],
        totalAmount: updatedPrice,
      };
    }
  }
  return state;
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, initialState);

  const addHandler = (foodData) => {
    console.log(foodData, "FOODDATA");
    dispatchCart({ type: "ADD_ITEM", item: foodData });
  };
  const removeHandler = () => {};
  const contextValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addHandler,
    removeItem: removeHandler,
  };
  console.log(contextValue.totalAmount, "TEST");

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
