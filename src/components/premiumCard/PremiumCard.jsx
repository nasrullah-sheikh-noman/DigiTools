import React, { use } from "react";

const PremiumCard = ({ cardData }) => {
  console.log(cardData.title);

  return (
    <div>
      <div className="grid grid-cols-3 gap-6 border border-gray-300 p-4 rounded-2xl">
        {cardData.map((data) => {
          return (
            <div className="card p-8 space-y-2 border border-gray-300 rounded-2xl">
              <h2 className="text-3xl font-bold">{data.title}</h2>
              <h4 className="text-[#627382]">
                {data.description}
              </h4>
              <div className="flex items-center">
                <h2 className="text-5xl font-bold">{data.price}</h2>
                <h4 className="text-xl text-[#627382]">/{data.billingCycle}</h4>
              </div>
              <h3 className="text-xl text-[#627382]">{data.feature1}</h3>
              <h3 className="text-xl text-[#627382]">{data.feature2}</h3>
              <h3 className="text-xl text-[#627382]">{data.feature3}</h3>
              <button className="btn btn-primary inline-block">{data.buttonText}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PremiumCard;
