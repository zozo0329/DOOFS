import React from "react";
const OrderListItem = ({ name, image, addOns }) => {
  return (
    <>
      <div className="flex flex-row items-center gap-5">
        <div>
          <img src={image} alt={name} className="h-15 w-18 rounded-[10px]" />
        </div>
        <div>
          <p className="text-[18px] font-semibold cursor-default">{name}</p>
          <div className="flex flex-row gap-3 flex-wrap">
            {addOns?.map((add, i) => (
              <p key={add.id || i} className="cursor-default">
                {add.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderListItem;
