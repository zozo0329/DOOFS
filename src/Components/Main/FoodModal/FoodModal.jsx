import React from "react";
import AddIcon from "../../../assets/Images/addICON.png";
const FoodModal = ({ item }) => {
  return (
    <>
      <div className="card w-96 bg-white text-black card-md shadow-sm flex-row justify-center items-center p-3 hover:bg-[#e7e7e7] transition-all duration-400 border-2 relative">
        <div className="card-body">
          <h2 className="card-title text-start">{item.name}</h2>
          <p className="text-start">{item.description}</p>
        </div>
        <div>
          <img
            src={item.Image}
            alt={item.name}
            className="object-fill rounded-2xl h-30 w-80"
          />
          <img
            src={AddIcon}
            alt="Add Icon"
            className="h-10 absolute bottom-0 right-2 top-30 z-10 hover:scale-110 transition-all duration-300 cursor-pointer rounded-full"
          />
        </div>
      </div>
    </>
  );
};

export default FoodModal;
