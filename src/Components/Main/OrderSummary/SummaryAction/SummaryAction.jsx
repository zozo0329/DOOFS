import React, { useContext } from "react";
import Button from "../../../UI/Buttons/Button";
import CartContext from "../../../../Other/Store/CartContext";
const SummaryAction = () => {
  const cartCtx = useContext(CartContext);
  return (
    <>
      <div className="flex flex-col gap-5 pt-5">
        <div>
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total:</p>
            <p className="text-lg font-bold">₱{cartCtx.totalAmount}</p>
          </div>
          <div>
            <a href="#" className="hover:underline">
              <p>See Summary</p>
            </a>
          </div>
        </div>
        <Button className="w-full text-[20px] font-bold hover:bg-[#a04800] hover:text-white transition-all duration-350 hover:border-0">
          Order
        </Button>
      </div>
    </>
  );
};

export default SummaryAction;
