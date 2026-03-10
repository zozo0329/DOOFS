import React from "react";
// import Carousel from "../../UI/Carousel/Carousel";
import SlideItem from "../SlideItems/SlideItem";
import ItemModal from "../../UI/Modal/ItemModal/ItemModal";
import FoodModal from "../FoodModal/FoodModal";
import FoodData from "../Data/FoodData";
import OrderSummary from "../OrderSummary/OrderSummary";
const MainContent = () => {
  return (
    <div>
      <SlideItem />

      <div className="flex flex-row justify-center items-start ">
        <div>
          <div className="flex flex-col gap-5 items-center justify-center">
            
            <div className="p-5 flex flex-wrap gap-5 items-center">
              {FoodData.map((item) => (
                <ItemModal>
                  <FoodModal item={item} />
                </ItemModal>
              ))}
            </div>
          </div>
        </div>
        <div className="p-5 sticky top-9 z-50">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
