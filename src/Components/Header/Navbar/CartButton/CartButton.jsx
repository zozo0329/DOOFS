import React from "react";

const CartButton = ({ image, amount }) => {
  return (
    <div
      className="flex justify-center items-center gap-1"
      //   className={`p-2 flex items-center gap-1 rounded-[25px] text-md border w-12
      // transition-all duration-200
      // ${
      //   amount === 0
      //     ? "bg-gray-300 border-gray-500 cursor-not-allowed scale-100 border-0"
      //     : "bg-[#e9e9e9] hover:bg-[#e0e0e0] border-black cursor-pointer hover:scale-105"
      // }`}
      //   disabled={amount === 0}
    >
      <img
        src={image}
        alt="Cart Image"
        className={` ${amount === 0 ? "h-3 w-3" : "h-4 w-4"}`}
      />
      <span className="text-md font-bold">{amount}</span>
    </div>
  );
};

export default CartButton;
