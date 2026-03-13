import React, { useState } from 'react'
import ProductsAction from './ProductsAction/ProductsAction'
import Button from '../../UI/Buttons/Button'
import BuyProduct from './ProductsAction/BuyProduct'
const Products = ({item}) => {
  console.log(item.addOns, "ITEM") 
  const [product, setProduct ] = useState()

  const addToCartHandler = () => {
    console.log("clicked")
    const Product = {

      name: item.name,
      image: item.Image,
      price: item.price,
      addOns: item.addOns,
    }
   console.log(Product, "PRODUCT")

  }
  return (
    <div>
       <div>
        <img src={item.Image} alt={item.name} />
       </div>
       <div className="flex flex-col gap-2 p-4  overflow-hidden">
        <h1 className='text-[19px] font-semibold'>{item.name}</h1>
        <p>{item.description}</p>
        <p className='text-xl font-bold'>₱{item.price}</p>
        <div className='mt-10'>
          <h1 className='text-[19px] font-semibold text-center'>Add ons {"(Optional)"}</h1>
          {item.addOns?.map((addOn) => (
            <ProductsAction key={addOn.id} name={addOn.name} price={addOn.price} />
          ))}
          
        </div>
       </div>
        <div className='flex items-center justify-center sticky bottom-0'>
        <BuyProduct addToCartHandler={addToCartHandler}/>
        </div>

    </div>
  )
}

export default Products