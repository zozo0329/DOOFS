import React from "react";
import Button from "../../../UI/Buttons/Button";
import OrderListActions from "./OrderListActions";
import OrderListItem from "./OrderListItem";

const OrderList = ({ name, image, price, addOns }) => {
  return (
    <div>
      <div className="w-full bg-white text-black card-md flex flex-col justify-start items-start p-5 gap-2 rounded-2xl shadow-md border border-[#c0c0c0]">
        <OrderListItem name={name} image={image} addOns={addOns} />
        <div className="flex flex-row justify-between items-center w-full">
          <div>
            <p>₱{price}</p>
          </div>
          <OrderListActions />
        </div>
      </div>
    </div>
  );
};

export default OrderList;
