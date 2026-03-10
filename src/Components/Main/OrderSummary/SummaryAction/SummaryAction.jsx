import React from "react";
import Button from "../../../UI/Buttons/Button";

const SummaryAction = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
       <div>
         <div className="flex justify-between">
          <p>Total:</p>
          <p>$0.00</p>
        </div>  
        <div>
          <a href="#" className="hover:underline">
            <p>See Summary</p>
          </a>
        </div>
       </div>
          <Button className="w-full">Order</Button>
      </div>
    </>
  );
};

export default SummaryAction;
