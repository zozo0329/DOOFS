import React from "react";
import OrderList from "./OrderList/OrderList";
import SummaryAction from "./SummaryAction/SummaryAction";

const OrderSummary = () => {
  return (
    <div className="w-140 bg-white text-black card-md flex-col justify-start items-start p-5 gap-5 rounded-2xl shadow-md border border-[#c0c0c0]">
      <OrderList />
      <SummaryAction />
    </div>
  );
};

export default OrderSummary;
