import React from "react";
import OrderList from "./OrderList/OrderList";
import SummaryAction from "./SummaryAction/SummaryAction";

const OrderSummary = () => {
  return (
    <div className="w-140 bg-white text-black card-md shadow-sm flex-col justify-start items-start p-5 gap-5 border-2 rounded-2xl ">
      <OrderList />
      <SummaryAction />
    </div>
  );
};

export default OrderSummary;
