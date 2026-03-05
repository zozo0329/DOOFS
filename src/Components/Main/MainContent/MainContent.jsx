import React from "react";
// import Carousel from "../../UI/Carousel/Carousel";
import SlideItem from "../SlideItems/SlideItem";
import ItemModal from "../../UI/Modal/ItemModal/ItemModal";
import FoodModal from "../FoodModal/FoodModal";
import FoodData from "../Data/FoodData";
const MainContent = () => {
  return (
    <div>
      <SlideItem />

      <div>
        <div className="flex flex-col gap-10 items-center justify-center p-10">
          <div>
            <h1 className="text-5xl font-bold">Our Fried Dishes</h1>
          </div>
          <div className="p-5 flex flex-wrap gap-5 items-center">
            {FoodData.map((item) => (
              <ItemModal>
                <FoodModal item={item} />
              </ItemModal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
