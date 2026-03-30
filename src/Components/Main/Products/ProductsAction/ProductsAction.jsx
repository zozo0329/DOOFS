import React from "react";

const ProductsAction = ({ name, price, checked, handleSelectAddOn }) => {
  // const [checked, setChecked] = useState(false);
  // const handleChange = () => {
  //   // const newValue = !checked;
  //   // setChecked(newValue);
  //   // handleSelectAddOn({ name, price, id: Math.random().toString() }, newValue);
  // };
  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="flex items-center justify-between cursor-pointer w-full hover:bg-base-200 p-2 transition-all duration-200 rounded-[10px]">
          <span className="text-md font-semibold text-base-content">
            {name}
          </span>
          <span className="flex items-center space-x-2">
            <span className="text-lg font-bold text-base-content">
              {" "}
              {price ? <>₱{price}</> : "Free"}
            </span>
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => {
                handleSelectAddOn({ name, price }, e.target.checked);
              }}
              className="form-checkbox h-4 w-4 accent-black"
            />
          </span>
        </label>
      </div>
    </div>
  );
};

export default ProductsAction;
