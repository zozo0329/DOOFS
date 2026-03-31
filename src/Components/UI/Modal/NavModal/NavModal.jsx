import React, { useRef } from "react";

const NavModal = ({ children, content, className }) => {
  const dialogRef = useRef(null);

  const openModal = () => {
    dialogRef.current.showModal();
  };

  return (
    <>
      <div className={className} onClick={openModal}>
        {children}
      </div>

      <dialog ref={dialogRef} className="modal">
        <div className="modal-box p-0">{content}</div>
        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
    </>
  );
};

export default NavModal;
