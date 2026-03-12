import React from 'react'
import ProductsAction from './ProductsAction/ProductsAction'
import Button from '../../UI/Buttons/Button'
import BuyProduct from './ProductsAction/BuyProduct'
const Products = ({item}) => {
  console.log(item.addOns, "ITEM")
  return (
    <div>
       <div>
        <img src={item.Image} alt={item.name} />
       </div>
       <div className="flex flex-col gap-2 p-4  overflow-hidden">
        <h1 className='text-[19px] font-semibold'>{item.name}</h1>
        <p>{item.description}</p>
        <p className='text-xl font-bold'>{item.price}</p>
        <div className='mt-10'>
          <h1 className='text-[19px] font-semibold text-center'>Add ons {"(Optional)"}</h1>
          <ProductsAction />
        
        </div>
       </div>
        <div className='flex items-center justify-center sticky bottom-0'>
        <BuyProduct/>
        </div>

    </div>
  )
}

export default Products