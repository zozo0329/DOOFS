import React from "react";

const ItemModal = ({ children, content, item }) => {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        onClick={() => document.getElementById(item.id).showModal()}
        className="cursor-pointer "
      >
        {children}
      </button>
      <dialog id={item.id} className="modal">
        <div className="modal-box p-0 w-full max-w-3xl lg:max-w-3xl lg:w-3/4 md:max-w-md  sm:max-w-sm ">
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
