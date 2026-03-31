import React, { use } from "react";

const PremiumCard = ({ cardData }) => {
  console.log(cardData);

  return (
    <div>
      <div className="max-w-300 mx-auto grid grid-cols-3 gap-18 border border-gray-300 p-6 rounded-2xl">
        {cardData.map((data) => {
          
          return (
            <div key={data.id} className="card p-6 space-y-4 border border-gray-300 rounded-2xl">
              <div className="flex justify-end  ">
                <h4 className={`inline-fit text-lg font-semibold px-4 py-1 rounded-full ${data.badge === 'Best Seller' ? 'bg-green-400' : data.badge === 'Most Popular' ? 'bg-amber-400' : data.badge === "Popular" ? "bg-red-400" : data.badge === "New" ? "bg-pink-400": "white" }`}>{data.badge}</h4>
              </div>
              <span className="w-9 h-9">
                <img src={data.image} alt="" />
              </span>
              <h2 className="text-3xl font-bold ">{data.title}</h2>
              <h4 className="text-[#627382] ">{data.description}</h4>
              <div className="flex items-center ">
                <h2 className="text-3xl font-bold">{data.price}</h2>
                <h4 className="text-xl text-[#627382]">/{data.billingCycle}</h4>
              </div>
              <div>
                <h3 className="text-lg text-[#627382]">{data.feature1}</h3>
                <h3 className="text-lg text-[#627382]">{data.feature2}</h3>
                <h3 className="text-lg text-[#627382]">{data.feature3}</h3>
              </div>
              <button className="btn btn-primary inline-block rounded-full transform transition hover:scale-105 duration-200">
                {data.buttonText}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PremiumCard;
