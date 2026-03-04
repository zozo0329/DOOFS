import React from "react";
import Button from "../../UI/Buttons/Button";
import CartImage from "../../../assets/Images/grocery-store.png";
const Navbar = () => {
  return (
    <div className="flex justify-items-center items-center gap-4">
      <Button
        className={`hover:bg-[#e9e9e9] transition-all duration-250 hover:scale-[1.1]`}
      >
        Login
      </Button>
      <Button
        className={`hover:bg-[#eeeeee] hover:text-[#bb7900] transition-all duration-250 hover:scale-[1.1]`}
      >
        Sign Up For Free Delivery
      </Button>
      <Button
        className={
          "flex items-center gap-1 rounded-[15px] text-md bg-[#cfcfcf] hover:bg-[#e0e0e0] transition all duration-200"
        }
      >
        <img src={CartImage} alt="Cart Image" className="h-6 w-6" />
        <span>69</span>
      </Button>
    </div>
  );
};

export default Navbar;
