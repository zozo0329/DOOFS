import React, { useContext } from "react";
import Button from "../../../UI/Buttons/Button";
import OrderListActions from "./OrderListActions";
import OrderListItem from "./OrderListItem";
import CartContext from "../../../../Other/Store/CartContext";
const OrderList = ({ name, image, price, addOns, id }) => {
  const cartCtx = useContext(CartContext);
  const item = cartCtx.items.find((i) => i.id === id) || {
    id,
    name,
    price,
    image,
    addOns,
    amount: 0,
  };
  console.log(item, "ITEEEEEEEEEEM");
  return (
    <div>
      <div className="w-full bg-white text-black card-md flex flex-col justify-start items-start p-5 gap-2 rounded-2xl shadow-md border border-[#c0c0c0]">
        <OrderListItem name={name} image={image} addOns={addOns} />
        <div className="flex flex-row justify-between items-center w-full">
          <div>
            <p>₱{price}</p>
          </div>
          <OrderListActions item={item} />
        </div>
      </div>
    </div>
  );
};

export default OrderList;
