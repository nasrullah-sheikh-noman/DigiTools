import React, { useState } from 'react';

const ToggoleButton = () => {

  const [selectedButton, setSelectedButton] = useState("Products");

  const productButton = () => {
    setSelectedButton("Products");
  };
  
  const cartButton = () => {
    setSelectedButton("Cart");
  }

  return (
    <div>
      <div className='flex gap-4 my-8 max-w-300 mx-auto items-center justify-center '>

        <button onClick={productButton} className={`btn rounded-full text-xl font-semibold px-12 py-7 ${selectedButton === "Products" ? "btn-primary" : ""} transform transition hover:scale-110 duration-200`}>Products</button>

        <button onClick={cartButton} className={`btn ${selectedButton === "Cart" ? "btn-primary" : ""} rounded-full text-xl font-semibold px-12 py-7 transform transition hover:scale-105 duration-200`}>Cart (0)</button>

      </div>
    </div>
  );
};

export default ToggoleButton;