import React from "react";
// import Carousel from "../../UI/Carousel/Carousel";
import SlideItem from "../SlideItems/SlideItem";
import ItemModal from "../../UI/Modal/ItemModal/ItemModal";
import FoodModal from "../FoodModal/FoodModal";
import FoodData from "../../../Other/Data/FoodData";
import OrderSummary from "../OrderSummary/OrderSummary";
import Products from "../Products/Products";
const MainContent = () => {
  return (
    <div>
      <SlideItem />

      <div className="flex flex-row justify-center items-start ">
        <div>
          {FoodData.map((category) => (
            <div key={category.id} className="flex flex-col gap-4 items-center justify-center pt-10">
              <div>
                <h1 className="text-5xl font-bold text-[#be4600]">{category.Category}</h1>
              </div>
              <div className="p-5 flex flex-wrap gap-5 items-center">
                {category.FoodItem.map((item) => (
                  <ItemModal key={item.id} item={item} content={<Products item={item}/>}>
                    <FoodModal item={item} />
                  </ItemModal>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="p-5 sticky top-12 z-50">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
