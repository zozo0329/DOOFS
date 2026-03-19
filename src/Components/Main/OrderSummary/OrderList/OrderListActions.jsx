import React, { useContext } from "react";
import Button from "../../../UI/Buttons/Button";
import CartContext from "../../../../Other/Store/CartContext";
const OrderListActions = ({ item }) => {
  const { addItem, removeItem } = useContext(CartContext);

  const increaseHandler = () => {
    console.log("Clicked");
    addItem({ ...item, amount: 1 });
  };
  const decreaseHandler = () => {
    removeItem(item.id);
  };
  return (
    <div className="flex flex-row items-center gap-2">
      <Button
        onClick={() => {
          decreaseHandler();
        }}
      >
        {"<"}
      </Button>
      <p>{item.amount}</p>
      <Button
        onClick={() => {
          increaseHandler();
        }}
      >
        {">"}
      </Button>
    </div>
  );
};

export default OrderListActions;
