import React, { useReducer } from "react";
import CartContext from "./CartContext";

const initialState = { items: [], totalAmount: 0 };
const cartReducer = (state, action) => {
  console.log(action, "ACTION");
  switch (action.type) {
    case "ADD_ITEM": {
      const addonsTotal = action.item.addOns
        ? action.item.addOns.reduce((sum, addon) => sum + addon.price, 0)
        : 0;
      const itemTotal = (action.item.price + addonsTotal) * action.item.amount;
      const updatedPrice = state.totalAmount + itemTotal;

      const existingItemIndex = state.items.findIndex(
        (ITEM) => ITEM.id === action.item.id,
      );
      let updatedItems;
      if (existingItemIndex >= 0) {
        const existingItem = state.items[existingItemIndex];
        updatedItems = [...state.items];
        const updatedItemData = {
          ...existingItem,
          amount: existingItem.amount + action.item.amount,
        };
        updatedItems[existingItemIndex] = updatedItemData;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      return {
        items: updatedItems,
        totalAmount: updatedPrice,
      };
    }
    case "REMOVE_ITEM": {
      const ExistingItemIdex = state;
    }
  }
  return state;
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, initialState);

  const addHandler = (foodData) => {
    dispatchCart({ type: "ADD_ITEM", item: foodData });
  };
  const removeHandler = (id) => {
    dispatchCart({ type: "REMOVE_ITEM", id });
  };
  const contextValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addHandler,
    removeItem: removeHandler,
  };
  console.log(contextValue.items, "ITEMS");

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
