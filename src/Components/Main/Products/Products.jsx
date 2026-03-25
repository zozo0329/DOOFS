import React, { useContext, useState } from "react";
import ProductsAction from "./ProductsAction/ProductsAction";
import BuyProduct from "./ProductsAction/BuyProduct";
import Cart from "../../../Other/Store/CartContext";
const Products = ({ item }) => {
  const [currAmount, setCurrAmount] = useState(1);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const cartCtx = useContext(Cart);

  const handleSelectAddOn = (addOn, isChecked) => {
    if (isChecked) {
      setSelectedAddOns((prev) => [...prev, addOn]);
    } else {
      setSelectedAddOns((prev) =>
        prev.filter((item) => item.name !== addOn.name),
      );
    }
  };

  const addToCartHandler = () => {
    const Product = {
      name: item.name,
      image: item.Image,
      price: item.price,
      amount: currAmount,
      addOns: selectedAddOns,
      id: Math.random().toString(),
    };
    cartCtx.addItem(Product);

    setSelectedAddOns([]);
    setCurrAmount(1);
    document.getElementById(item.id).close();
  };
  return (
    <div>
      <div>
        <img
          className="w-full h-90 object-cover"
          src={item.Image}
          alt={item.name}
        />
      </div>
      <div className="flex flex-col gap-2 p-4  overflow-hidden">
        <h1 className="text-[19px] font-semibold">{item.name}</h1>
        <p>{item.description}</p>
        <p className="text-xl font-bold">₱{item.price}</p>
        <div className="mt-10">
          <h1 className="text-[19px] font-semibold text-center">
            Add ons {"(Optional)"}
          </h1>
          {item.addOns?.map((addOn) => (
            <ProductsAction
              key={addOn.id}
              name={addOn.name}
              price={addOn.price}
              handleSelectAddOn={handleSelectAddOn}
              checked={selectedAddOns.some((a) => a.name === addOn.name)}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center sticky bottom-0">
        <BuyProduct
          addToCartHandler={addToCartHandler}
          setCurrAmount={setCurrAmount}
          currAmount={currAmount}
        />
      </div>
    </div>
  );
};

export default Products;
