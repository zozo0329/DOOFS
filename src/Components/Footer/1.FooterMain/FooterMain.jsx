import React from "react";
import FooterLogos from "../FooterLogos/FooterLogos";
import FooterContent from "../FooterContent/FooterContent";

const FooterMain = () => {
  return (
    <>
      <div className="bg-base-200 p-10 mt-30">
        <div className="border-b p-5">
          <FooterLogos />
        </div>
        <div>
          <FooterContent />
        </div>
      </div>
    </>
  );
};

export default FooterMain;
