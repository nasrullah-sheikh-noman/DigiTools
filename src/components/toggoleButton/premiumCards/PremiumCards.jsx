
import { useEffect, useState } from "react";
import PremiumCard from "../premiumCard/PremiumCard";

const PremiumCards = ({ cardPromise,  setCartItem, addToCart, setAddToCart }) => {
  const [cardData, setCartData] = useState([]);
  
  
  useEffect(() => {
    cardPromise.then(res => setCartData(res));
  }, [cardPromise]);

  return (
    <div>
      <PremiumCard
        cardData={cardData}
        setCartItem={setCartItem}
        addToCart={addToCart}
        setAddToCart={setAddToCart}
      />
    </div>
  );
};

export default PremiumCards;
