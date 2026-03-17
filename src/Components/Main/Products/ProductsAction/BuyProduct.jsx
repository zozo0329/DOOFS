import React from 'react'
import Button from '../../../UI/Buttons/Button'

const BuyProduct = ({addToCartHandler, currAmount , setCurrAmount}) => {

  const decreaseHandler = () => {
    setCurrAmount(Math.max(1, currAmount - 1));
  }
  const increaseHandler = () => {
    setCurrAmount(currAmount + 1);
  }

  return (
    <div
      className={`flex flex-row items-center justify-between w-full gap-5 shadow-2xl bg-white p-4 `}
    >
      <div className='flex items-center gap-2'>
        <Button onClick={decreaseHandler}>{"<"}</Button>
        <p className='text-xl font-bold'>{currAmount}</p>
        <Button onClick={increaseHandler}>{">"}</Button>
      </div>
      <Button className="hover:bg-[#d8d8d8] transition-all duration-300 w-150 text-xl" onClick={addToCartHandler}>Add to cart</Button>
    </div>
  )
}

export default BuyProduct