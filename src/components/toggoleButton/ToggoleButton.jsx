import React, { useState } from 'react';

const ToggoleButton = ({cartItem}) => {

  const [selectedButton, setSelectedButton] = useState("Products");

  const productButton = () => {
    setSelectedButton("Products");
  };

  const cartButton = () => {
    setSelectedButton("Cart");
  }

  return (
    <div>
      <div className='flex gap-4 my-8 max-w-300 mx-auto items-center justify-center border border-gray-200 rounded-full w-fit p-1 bg-gray-200'>

        <button onClick={productButton} className={`btn rounded-full text-xl font-semibold px-12 py-7 ${selectedButton === "Products" ? "btn-primary" : ""} transform transition hover:scale-110 duration-200 border border-gray-200`}>Products</button>

        <button onClick={cartButton} className={`btn ${selectedButton === "Cart" ? "btn-primary" : ""} rounded-full text-xl font-semibold px-12 py-7 transform transition hover:scale-105 duration-200 border border-gray-200`}>Cart (
            {cartItem}
          )</button>

      </div>
    </div>
  );
};

export default ToggoleButton;