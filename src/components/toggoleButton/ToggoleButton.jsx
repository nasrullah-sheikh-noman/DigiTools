import React from 'react';

const ToggoleButton = () => {
  return (
    <div>
      <div className='flex gap-4 my-8 max-w-300 mx-auto items-center justify-center '>
        <button className="btn rounded-full text-xl font-semibold px-12 py-7 btn-primary">Products</button>
        <button className="btn rounded-full text-xl font-semibold px-12 py-7">Cart (0)</button>
      </div>
    </div>
  );
};

export default ToggoleButton;