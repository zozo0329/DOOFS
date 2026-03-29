import React from "react";
// import Carousel from "../../UI/Carousel/Carousel";
import SlideItem from "../SlideItems/SlideItem";
import ItemModal from "../../UI/Modal/ItemModal/ItemModal";
import FoodModal from "../FoodModal/FoodModal";
import FoodData from "../../../Other/Data/FoodData";
import OrderSummary from "../OrderSummary/OrderSummary";
import Products from "../Products/Products";
import MainContentStyle from "./MainContent.module.css";
const MainContent = () => {
  return (
    <div>
      <SlideItem />

      <div
        className={`flex flex-row justify-center items-start ${MainContentStyle.mainContentWrapper}`}
      >
        <div className="flex flex-col justify-center items-center">
          {FoodData.map((category) => (
            <div
              key={category.id}
              className="flex flex-col gap-4 items-center justify-center pt-10"
            >
              <div>
                <h1 className="text-5xl font-bold text-[#be4600] cursor-default">
                  {category.Category}
                </h1>
              </div>
              <div
                className={`p-5 flex flex-wrap gap-5 items-center ${MainContentStyle.foodItemsWrapper}`}
              >
                {category.FoodItem.map((item, i) => (
                  <ItemModal
                    key={item.id || i}
                    item={item}
                    content={<Products item={item} />}
                  >
                    <FoodModal item={item} />
                  </ItemModal>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={`sticky pt-15 ${MainContentStyle.orderSummaryWrapper}`}>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
