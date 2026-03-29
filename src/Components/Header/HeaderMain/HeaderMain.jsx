import React from "react";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import Navbar from "../Navbar/Navbar";

const HeaderMain = () => {
  return (
    <div className="sticky top-0 z-100 flex justify-between items-center bg-white p-1 pl-10 pr-10 shadow-lg">
      <HeaderLogo />
      <Navbar />
    </div>
  );
};

export default HeaderMain;
