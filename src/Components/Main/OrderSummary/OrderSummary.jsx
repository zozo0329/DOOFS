import { useContext } from "react";
import OrderList from "./OrderList/OrderList";
import SummaryAction from "./SummaryAction/SummaryAction";
import CartContext from "../../../Other/Store/CartContext";

const OrderSummary = () => {
  const cartCtx = useContext(CartContext);
  const cartItems = cartCtx.items || [];
  console.log(cartItems, "CARTITEMS");

  return (
    <div className="w-140 max-h-125 bg-white text-black card-md flex-col justify-start items-start p-5 gap-5 rounded-2xl shadow-md border border-[#c0c0c0]">
      <div className="pb-5">
        <p className="text-xl font-semibold">Your items</p>
      </div>
      <div className="flex flex-col gap-2 overflow-y-auto max-h-80">
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center py-4">Your cart is empty</p>
        ) : (
          cartItems.map(
            (data) =>
              data &&
              data.id && (
                <OrderList
                  id={data.id}
                  key={data.id}
                  name={data.name}
                  image={data.image}
                  price={data.price}
                  addOns={data.addOns}
                />
              ),
          )
        )}
      </div>
      <SummaryAction />
    </div>
  );
};

export default OrderSummary;
