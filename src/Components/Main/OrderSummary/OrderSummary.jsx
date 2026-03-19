import React, { useContext } from "react";
import OrderList from "./OrderList/OrderList";
import SummaryAction from "./SummaryAction/SummaryAction";
import CartContext from "../../../Other/Store/CartContext";
const OrderSummary = () => {
  const cartCtx = useContext(CartContext);
  const CartItem = cartCtx.items;
  console.log(CartItem, "ITEMS");
  return (
    <div className="w-140 max-h-125 bg-white text-black card-md flex-col justify-start items-start p-5 gap-5 rounded-2xl shadow-md border border-[#c0c0c0]">
      <div className="pb-5">
        <p className="text-xl font-semibold">Your items </p>
      </div>
      <div className="flex flex-col gap-2 overflow-y-auto max-h-80">
        {CartItem.map((data) => (
          <OrderList
            key={data.id}
            name={data.name}
            image={data.image}
            price={data.price}
            addOns={data.addOns}
          />
        ))}
        {/* <OrderList /> */}
      </div>
      <SummaryAction />
    </div>
  );
};

export default OrderSummary;
