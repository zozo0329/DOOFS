import React from "react";

const Button = ({ children, className, onClick, type = "button" }) => {
  return (
    <button
      className={`btn bg-base-100 text-base-content border-2 border-base-content rounded-[5px]font-medium hover:scale-105 ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
