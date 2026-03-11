import React from 'react'

const OrderListItem = () => {
  return (
    <div className="flex flex-row items-center gap-5">
        <img src="https://i.pinimg.com/736x/ba/1f/40/ba1f40c4e8befb35f6dd3de3b0d167d3.jpg" alt="Image" className="h-15"/>
        <div>
          <p>Item Name</p>
          <p>Add Ons</p>
        </div>
      </div>
  )
}

export default OrderListItem