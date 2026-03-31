import React, { useState } from "react";
import ReactDOM from "react-dom";
import xIcon from "../../../../assets/Images/x.png";

const CartModal = ({ children, className, disabled, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    if (disabled) return;
    setIsOpen(true);
  };

  const closeHandler = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* BUTTON */}
      <button className={className} disabled={disabled} onClick={openHandler}>
        {children}
      </button>

      {/* PORTAL (ALWAYS RENDERED) */}
      {ReactDOM.createPortal(
        <>
          {/* BACKDROP */}
          <div
            onClick={closeHandler}
            className={`
              fixed inset-0 bg-black/20 z-9998
              transition-opacity duration-300
              ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
          />

          {/* DRAWER */}
          <div
            className={`
              fixed top-0 right-0 h-full w-100 bg-base-100 z-9999
              shadow-2xl rounded-l-2xl
              transform transition-transform duration-300 ease-in-out
              ${isOpen ? "translate-x-0" : "translate-x-full"}
            `}
          >
            <div className="p-4">
              <div className="hidden">
                <button onClick={closeHandler}>
                  <img src={xIcon} alt="X UI" />
                </button>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold ">All Carts</h2>
                  <button
                    onClick={closeHandler}
                    className="cursor-pointer hover:scale-[1.2] transition-all duration-300"
                  >
                    <img src={xIcon} alt="X UI" />
                  </button>
                </div>
                {content}
              </div>
            </div>
          </div>
        </>,
        document.getElementById("modal-root"),
      )}
    </>
  );
};

export default CartModal;
