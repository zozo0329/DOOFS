import React from "react";

const HeaderLogo = () => {
  return (
    <div className="flex items-center gap-1">
      <img
        src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png"
        alt="Website Logo"
        className="h-12 cursor-pointer"
      />
      <h1 className="text-xl text-base-content font-bold cursor-pointer hover:text-base-300 transition-all duration-200">
        Doofs
      </h1>
    </div>
  );
};

export default HeaderLogo;
