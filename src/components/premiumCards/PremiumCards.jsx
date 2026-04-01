import React, { use } from "react";
import PremiumCard from "../premiumCard/PremiumCard";

const PremiumCards = ({cardPromise, cartItem , setCartItem}) => {
  const cardData = use(cardPromise);


  return (
    <div>
        <PremiumCard cardData={cardData} cartItem={cartItem} setCartItem={setCartItem} />
    </div>
  );
};

export default PremiumCards;
