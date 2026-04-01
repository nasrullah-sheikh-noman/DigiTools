import React from 'react';
import Carts from '../carts/carts';
import Empty from '../emptyCart/Empty';

const CardsInCart = ({cartItem}) => {
  return (
    <div>
      <div className='max-w-300 mx-auto bg-gray-100 border border-gray-500 min-h-32 rounded-2xl p-8 my-12'>
        {
          cartItem != 0 ? (
            <Carts cartItem={cartItem}/>
          ) : (
            <Empty />
          )
            
        }
      </div>
    </div>
  );
};

export default CardsInCart;