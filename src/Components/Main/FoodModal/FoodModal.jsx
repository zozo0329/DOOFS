import React from "react";

const FoodModal = ({ item }) => {
  return (
    <>
      <div class="card w-96 bg-white text-black card-md shadow-sm flex-row justify-center items-center p-3 hover:bg-[#c9c9c9] transition-all duration-200 border-2">
        <div class="card-body">
          <h2 class="card-title text-start">{item.name}</h2>
          <p className="text-start">{item.description}</p>
        </div>
        <div>
          <img
            src={item.Image}
            alt={item.name}
            className="object-fill rounded-2xl h-30 w-80"
          />
        </div>
      </div>
    </>
  );
};

export default FoodModal;
