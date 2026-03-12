import React from 'react'
import Button from '../../../UI/Buttons/Button'

const BuyProduct = () => {
  // allow callers to position/override styles (e.g. sticky bottom-0 or wrap in a modal-action)
  return (
    <div
      className={`flex flex-row items-center justify-between w-full gap-5 shadow-2xl bg-white p-4 `}
    >
      <div className='flex items-center gap-2'>
        <Button>{"<"}</Button>
        <p className='text-xl font-bold'>69</p>
        <Button>{">"}</Button>
      </div>
      <Button className="">Add to cart</Button>
    </div>
  )
}

export default BuyProduct