import React from "react";

const Button = ({ children, className, onClick, type = "button" }) => {
  return (
    <button
      className={`btn bg-white text-black border-2 border-black p-2 rounded-[5px] cursor-pointer font-medium ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
