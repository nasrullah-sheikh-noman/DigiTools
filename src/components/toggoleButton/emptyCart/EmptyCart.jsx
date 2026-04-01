import React from 'react';

const EmptyCart = () => {
  return (
    <div>
      <h2 className='text-2xl font-semibold'>Your Carts</h2>
      <div className='my-7 flex flex-col justify-center items-center text-center space-y-4 '>
        <img className='w-20 h-20' src="https://i.ibb.co.com/ZzVgNMj6/shopping-cart.png" alt="" />
        <h2 className='text-gray-500 text-xl font-medium'>Your cart is empty</h2>
      </div>
    </div>
  );
};

export default EmptyCart;