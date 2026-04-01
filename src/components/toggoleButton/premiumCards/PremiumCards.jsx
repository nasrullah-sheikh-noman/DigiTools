
import { use, useEffect, useState } from "react";
import PremiumCard from "../premiumCard/PremiumCard";

const PremiumCards = ({ cardPromise, cartItem, setCartItem }) => {
  const [cardData, setCartData] = useState([]);
  
  useEffect( () => {
    cardPromise.then(res => setCartData(res));
  }, [cardPromise]);

  return (
    <div>
      <PremiumCard
        cardData={cardData}
        cartItem={cartItem}
        setCartItem={setCartItem}
      />
    </div>
  );
};

export default PremiumCards;
