import React from 'react';
import Carts from '../carts/carts';
import EmptyCart from '../emptyCart/emptyCart';

const CardsInCart = ({cartItem}) => {
  return (
    <div>
      <div className='max-w-300 mx-auto bg-gray-100 border border-gray-500 h-32 rounded-2xl p-8 my-12'>
        {
          cartItem != 0 ? (
            <Carts/>
          ) : (
            <EmptyCart/>
          )
            
        }
      </div>
    </div>
  );
};

export default CardsInCart;