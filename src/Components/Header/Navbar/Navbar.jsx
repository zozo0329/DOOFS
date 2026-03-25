import React, { useContext } from "react";
import Button from "../../UI/Buttons/Button";
import CartImage from "../../../assets/Images/grocery-store.png";
import CartButton from "../Navbar/CartButton/CartButton";
import CartContext from "../../../Other/Store/CartContext";
import CartModal from "../../UI/Modal/CartModal/CartModal";
const Navbar = () => {
  const cartCtx = useContext(CartContext);
  return (
    <div className="flex justify-items-center items-center gap-6">
      <Button
        className={`hover:bg-[#e9e9e9] transition-all duration-250 hover:scale-105`}
      >
        Login
      </Button>
      <Button
        className={`hover:bg-[#c9c9c9] hover:text-[#303030] transition-all duration-250 hover:scale-105`}
      >
        Sign Up For Free Delivery
      </Button>
      <CartModal
        className={`btn p-3 flex items-center gap-1 rounded-[25px] text-md border w-12
      transition-all duration-200
      ${
        cartCtx.items.length === 0
          ? "bg-gray-300 border-gray-500 cursor-not-allowed scale-100 border-0"
          : "bg-[#e9e9e9] hover:bg-[#e0e0e0] border-black cursor-pointer hover:scale-105"
      }`}
        disabled={cartCtx.items.length === 0}
      >
        <CartButton image={CartImage} amount={cartCtx.items.length} />
      </CartModal>
    </div>
  );
};

export default Navbar;
