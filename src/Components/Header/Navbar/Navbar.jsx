import React from "react";
import Button from "../../UI/Buttons/Button";
import CartImage from "../../../assets/Images/grocery-store.png";
const Navbar = () => {
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
        className={
          "btn p-2 flex items-center gap-1 rounded-[25px] text-md bg-[#e9e9e9] hover:bg-[#e0e0e0] transition all duration-200 border-2 border-[#000000]"
        }
      >
        <img src={CartImage} alt="Cart Image" className="h-5 w-5" />
        <span className="text-md font-bold">69</span>
      </button>
    </div>
  );
};

export default Navbar;
