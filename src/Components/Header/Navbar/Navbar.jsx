import React, { useContext } from "react";
import Button from "../../UI/Buttons/Button";
import CartImage from "../../../assets/Images/grocery-store.png";
import CartContext from "../../../Other/Store/CartContext";
const Navbar = () => {
  const cartCtx = useContext(CartContext);
  return (
    <div className="flex justify-items-center items-center gap-6">
      <Button
        className={`hover:bg-[#e9e9e9] transition-all duration-250 hover:scale-[1.1]`}
      >
        Login
      </Button>
      <Button
        className={`hover:bg-[#c9c9c9] hover:text-[#303030] transition-all duration-250 hover:scale-[1.1]`}
      >
        Sign Up For Free Delivery
      </Button>
      <button
        className={`btn p-2 flex items-center gap-1 rounded-[25px] text-md border w-12
    transition-all duration-200 
    ${
      cartCtx.items.length === 0
        ? "bg-gray-300 border-gray-500 cursor-not-allowed scale-100"
        : "bg-[#e9e9e9] hover:bg-[#e0e0e0] border-black cursor-pointer hover:scale-105"
    }`}
        disabled={cartCtx.items.length === 0} // prevents clicking
      >
        <img
          src={CartImage}
          alt="Cart Image"
          className={` ${cartCtx.items.length === 0 ? "h-3 w-3" : "h-4 w-4"}`}
        />
        <span className="text-md font-bold">{cartCtx.items.length}</span>
      </button>
    </div>
  );
};

export default Navbar;
