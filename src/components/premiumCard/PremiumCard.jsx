import React, { use } from "react";

const PremiumCard = () => {

  // console.log("PremiumCardData", premimumCard);

  return (
    <div>
      <div className="card p-8 space-y-2 border border-gray-300 rounded-2xl">
        <h2 className="text-5xl font-bold">Design Templates Pack</h2>
        <h4 className="text-[#627382]">
          2000+ premium templates for social media, presentations, and marketing
          materials.
        </h4>
        <div className="flex items-center">
          <h2 className="text-5xl font-bold">$49</h2>
          <h4 className="text-xl text-[#627382]">/one-time</h4>
        </div>
        <h3 className="text-xl text-[#627382]">2000+ templates</h3>
        <h3 className="text-xl text-[#627382]">Monthly updates</h3>
        <h3 className="text-xl text-[#627382]">Commercial license</h3>
        <button className="btn btn-primary inline-block">Primary</button>
      </div>
    </div>
  );
};

export default PremiumCard;
