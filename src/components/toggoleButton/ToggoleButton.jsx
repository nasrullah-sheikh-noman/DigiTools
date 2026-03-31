import React from 'react';

const ToggoleButton = () => {
  return (
    <div>
      <div className='flex gap-4 my-8 max-w-300 mx-auto items-center justify-center '>
        <button className="btn rounded-full text-xl font-semibold px-12 py-7 btn-primary transform transition hover:scale-110 duration-200">Products</button>
        <button className="btn rounded-full text-xl font-semibold px-12 py-7 transform transition hover:scale-105 duration-200">Cart (0)</button>
      </div>
    </div>
  );
};

export default ToggoleButton;