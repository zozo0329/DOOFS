import React from "react";

const Button = ({ children, className, onClick }) => {
  return (
    <div
      className={`btn bg-white text-black border-2 p-1 rounded-[5px] cursor-pointer font-medium ${className}`}
      onClick={onClick || "button"}
    >
      {children}
    </div>
  );
};

export default Button;
