import React from "react";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import Navbar from "../Navbar/Navbar";

const HeaderMain = () => {
  return (
    <div className="sticky top-0 z-50 flex justify-between p-1 items-center] bg-[#ffffff] pl-10 pr-10">
      <HeaderLogo />
      <Navbar />
    </div>
  );
};

export default HeaderMain;
