import React from 'react'
import ProductsAction from './ProductsAction/ProductsAction'
import Button from '../../UI/Buttons/Button'
import BuyProduct from './ProductsAction/BuyProduct'
const Products = () => {
  return (
    <div>
       <div>
        <img src="https://lakegenevacountrymeats.com/wp-content/uploads/Fried-Chicken-Pieces-1.jpg" alt="IMAGE" />
       </div>
       <div className="flex flex-col gap-2 p-4  overflow-hidden">
        <h1 className='text-[19px] font-semibold'>NAME</h1>
        <p>Description</p>
        <p className='text-xl font-bold'>₱100.79</p>
        <div className='mt-10'>
          <h1 className='text-[19px] font-semibold text-center'>Add ons {"(Optional)"}</h1>
          <ProductsAction/>
          <ProductsAction/>
          <ProductsAction/>
          <ProductsAction/>
        </div>
       </div>
        <div className='flex items-center justify-center sticky bottom-0'>
        <BuyProduct/>
        </div>

    </div>
  )
}

export default Products