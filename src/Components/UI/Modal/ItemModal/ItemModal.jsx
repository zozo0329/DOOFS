import React from "react";

const ItemModal = ({ children, content }) => {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        onClick={() => document.getElementById("my_modal_2").showModal()}
        className="cursor-pointer "
      >
        {children}
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box p-0 w-full max-w-3xl">
          {/* <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p> */}
          {content}
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default ItemModal;
