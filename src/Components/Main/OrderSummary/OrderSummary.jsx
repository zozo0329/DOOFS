import { useContext } from "react";
import OrderList from "./OrderList/OrderList";
import SummaryAction from "./SummaryAction/SummaryAction";
import CartContext from "../../../Other/Store/CartContext";
import OrderSummaryStyle from "./OrderSummary.module.css";

const OrderSummary = () => {
  const cartCtx = useContext(CartContext);
  const cartItems = cartCtx.items || [];
  console.log(cartItems, "CARTITEMS");

  return (
    <div
      className={`w-140 h-full bg-base-100 text-base-content card-md flex-col justify-start items-start p-5 gap-5 rounded-2xl shadow-md border border-base-300 ${OrderSummaryStyle.orderSummaryContainer}`}
    >
      <div className="pb-5">
        <p className="text-xl font-semibold cursor-default">Your items</p>
      </div>
      <div className="flex flex-col gap-2 overflow-y-auto max-h-80">
        {cartItems.length === 0 ? (
          <div className="flex flex-col justify-center items-center p-5">
            <img
              src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png"
              alt="Logo"
              className="h-20 w-20 opacity-56"
            />
            <p className="text-gray-500 text-[18px] cursor-default font-semibold">
              Your cart is empty
            </p>
          </div>
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
