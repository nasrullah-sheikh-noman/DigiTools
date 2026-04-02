import React, { useEffect, useState } from "react";
import Blank from "../blank/Blank";
import Carts from "../carts/carts";

const CardsInCart = ({ cardPromise, cartItem, addToCart }) => {
  const [cardData, setCartData] = useState([]);

  useEffect(() => {
    cardPromise.then((res) => setCartData(res));
  }, [cardPromise]);

  console.log(addToCart, cartItem, cardData);

  const selectedCards = cardData.filter((card) => addToCart.includes(card.id));

  return (
    <div>
      <div className="max-w-300 mx-auto bg-gray-100 border border-gray-500 min-h-32 rounded-2xl p-8 my-12">
        <h2 className="text-4xl font-bold pb-8 pt-2">
          Your Carts ({addToCart.length})
        </h2>
        {selectedCards.length > 0 ? (
          <>
            {selectedCards.map((card) => (
              <div key={card.id} className="my-6">
                <Carts data={card} addToCart={addToCart} />
              </div>
            ))}
            <div className="text-xl font-semibold border-2 border-purple-300 rounded-2xl py-4 flex justify-between px-8">
              <h2>Total Price : </h2>
              <h2> ${selectedCards.reduce((sum, card) => sum + parseFloat(card.price.toString().replace('$', '')), 0)}</h2>
            </div>
          </>
        ) : (
          <Blank />
        )}
      </div>
    </div>
  );
};

export default CardsInCart;
