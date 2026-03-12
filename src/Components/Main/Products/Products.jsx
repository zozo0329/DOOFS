import React from 'react'

const Products = () => {
  return (
    <div>
       <div>
        <img src="#" alt="IMAGE" />
       </div>
       <div>
        <h1>NAME</h1>
        <p>DESCRIPTION</p>
        <p>PRICE</p>
       </div>
       <div>
        <h1>Add ons {"(Optional)"}</h1>
      <div>
          <h1>Name</h1>
            <span className="flex items-center">
              <span className="mr-2">+P</span>
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-orange-600"
              />
            </span>
      </div>
       </div>

    </div>
  )
}

export default Products