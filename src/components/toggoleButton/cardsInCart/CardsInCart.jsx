import React from 'react';
import Carts from '../carts/carts';
import Blank from '../blank/Blank';

const CardsInCart = ({cartItem}) => {
  return (
    <div>
      <div className='max-w-300 mx-auto bg-gray-100 border border-gray-500 min-h-32 rounded-2xl p-8 my-12'>
        {
          cartItem != 0 ? (
            <Carts cartItem={cartItem}/>
          ) : (
            <Blank />
          )
            
        }
      </div>
    </div>
  );
};

export default CardsInCart;