import React from "react";
import fbIcon from "../../../assets/Images/facebookICON.png";
import igIcon from "../../../assets/Images/instagramICON.png";
const FooterLogos = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center opacity-55 gap-2">
        <img
          src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png"
          alt="Doofs Logo"
          className="w-12 h-12 cursor-pointer"
        />
        <p className="text-lg font-semibold cursor-pointer">Doofs</p>
      </div>
      <div className="flex items-center gap-4">
        <img
          src={fbIcon}
          alt="Facebook Icon"
          className="w-11 h-11 cursor-pointer opacity-55"
        />
        <img
          src={igIcon}
          alt="Instagram Icon"
          className="w-11 h-11 cursor-pointer opacity-55"
        />
      </div>
    </div>
  );
};

export default FooterLogos;
