import React, { use } from "react";
import PremiumCard from "../premiumCard/PremiumCard";

const PremiumCards = ({cardPromise}) => {
  // console.log( cardPromise);
  const cardData = use(cardPromise);

  console.log( cardData);

  return (
    <div>
      {/* <div className="grid grid-cols-3 gap-6 border border-gray-300 p-4 rounded-2xl"></div> */}
      
    </div>
  );
};

export default PremiumCards;
