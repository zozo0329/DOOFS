import React from "react";

const ProductsAction = ({ name, price, handleSelectAddOn }) => {
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    const newValue = !checked;
    setChecked(newValue);

    handleSelectAddOn({ name, price, id: Math.random().toString() }, newValue);
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        {/* clickable row label with space between name and the rest */}
        <label className="flex items-center justify-between cursor-pointer w-full hover:bg-[#dbdbdb] p-2 transition-all duration-200 rounded-[10px]">
          <span className="text-md font-semibold">{name}</span>
          <span className="flex items-center space-x-2">
            <span className="text-lg font-bold">
              {" "}
              {price ? <>₱{price}</> : "Free"}
            </span>
            <input
              type="checkbox"
              checked={checked}
              onChange={handleChange}
              className="form-checkbox h-4 w-4 accent-black"
              // checked and onChange could be managed via state if needed
            />
          </span>
        </label>
      </div>
    </div>
  );
};

export default ProductsAction;
