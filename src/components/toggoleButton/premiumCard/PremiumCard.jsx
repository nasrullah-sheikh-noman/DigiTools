import React from "react";
import Card from "../card/Card";

const PremiumCard = ({ cardData, cartItem, setCartItem }) => {
  return (
    <div>
      <div className="max-w-300 mx-auto grid grid-cols-3 gap-18 border-2 border-red-600 p-8 my-12 rounded-2xl hover:border-2 hover:border-green-500">
        {cardData.map((data) => (
          <div key={data.id}>
            <Card data={data} cartItem={cartItem} setCartItem={setCartItem} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumCard;
