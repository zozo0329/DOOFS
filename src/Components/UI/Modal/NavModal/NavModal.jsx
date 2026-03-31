import React from "react";

const NavModal = ({ children, content, className }) => {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <div
        className={`${className}`}
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        {children}
      </div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">{content}</div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default NavModal;
