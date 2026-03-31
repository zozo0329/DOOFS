import React, { useContext } from "react";
import Button from "../../../UI/Buttons/Button";
import CartImage from "../../../../assets/Images/grocery-store.png";
import CartButton from "../CartButton/CartButton";
import CartContext from "../../../../Other/Store/CartContext";
import ThemeContext from "../../../../Other/Store/ThemeContext";
import CartModal from "../../../UI/Modal/CartModal/CartModal";
import NavModal from "../../../UI/Modal/NavModal/NavModal";
import Login from "../Login/Login";
import SignUp from "../Signup/SignUp";
const Navbar = () => {
  const cartCtx = useContext(CartContext);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <div className="flex justify-items-center items-center gap-6">
        <button
          onClick={toggleTheme}
          className="btn btn-ghost btn-circle"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </button>
        <NavModal content={<Login />}>
          <Button
            className={`hover:bg-base-300 transition-all duration-250 hover:scale-105`}
          >
            Login
          </Button>
        </NavModal>
        <NavModal content={<SignUp />}>
          <Button
            className={`hover:bg-base-300 hover:text-base-content transition-all duration-250 hover:scale-105`}
          >
            Sign Up For Free Delivery
          </Button>
        </NavModal>

        <CartModal
          className={`btn p-3 flex items-center gap-1 rounded-[25px] text-md border w-12
      transition-all duration-200
      ${
        cartCtx.items.length === 0
          ? "bg-base-300 border-base-content cursor-not-allowed scale-100 border-0"
          : "bg-primary hover:bg-secondary text-primary-content border-primary cursor-pointer hover:scale-105"
      }`}
          disabled={cartCtx.items.length === 0}
        >
          <CartButton image={CartImage} amount={cartCtx.items.length} />
        </CartModal>
      </div>
    </>
  );
};

export default Navbar;
