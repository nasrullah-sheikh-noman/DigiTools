import React, { use } from "react";
import PremiumCard from "../premiumCard/PremiumCard";

const PremiumCards = ({cardPromise}) => {
  const cardData = use(cardPromise);


  return (
    <div>
      <PremiumCard cardData={cardData}/>
    </div>
  );
};

export default PremiumCards;
