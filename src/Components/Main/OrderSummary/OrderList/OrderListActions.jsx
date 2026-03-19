import React, { useContext, useState } from "react";
import Button from "../../../UI/Buttons/Button";
import CartContext from "../../../../Other/Store/CartContext";
const OrderListActions = () => {
  const cartCtx = useContext(CartContext);
  const [cartAmount, setCartAmount] = useState(cartCtx.items.length);

  const increaseHandler = () => {
    console.log("Clicked");
    setCartAmount(cartAmount + 1);
  };
  const decreaseHandler = () => {
    console.log("Clicked");
    setCartAmount((prev) => (prev > 1 ? prev - 1 : 1));
  };
  return (
    <div className="flex flex-row items-center gap-2">
      <Button onClick={decreaseHandler}>{"<"}</Button>
      <p>{cartAmount}</p>
      <Button onClick={increaseHandler}>{">"}</Button>
    </div>
  );
};

export default OrderListActions;
