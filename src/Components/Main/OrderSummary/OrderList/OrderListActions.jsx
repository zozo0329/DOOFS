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
      {/* <Button
        onClick={() => {
          decreaseHandler();
        }}
      >
        {"<"}
      </Button> */}
      {item.amount === 1 ? (
        <Button
          onClick={() => {
            decreaseHandler();
          }}
          className="p-0"
        >
          <img
            src="https://img.icons8.com/?size=100&id=nerFBdXcYDve&format=png&color=000000"
            alt="Trash Icon"
            className="w-6 h-6 p-0"
          />
        </Button>
      ) : (
        <Button
          onClick={() => {
            decreaseHandler();
          }}
        >
          {"<"}
        </Button>
      )}
      <p className="font-semibold">{item.amount}</p>
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
