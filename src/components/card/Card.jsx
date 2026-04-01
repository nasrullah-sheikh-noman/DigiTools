import React, { use, useState } from "react";

const Card = (data) => {
  const info = data.data;

  // const data = info.data;
  const [addToCart, setAddToCart] = useState("Buy Now");

  return (
    <div>
      <div
        key={info.id}
        className="card p-6 space-y-4 border-2 border-gray-300 rounded-2xl transform transition hover:scale-105 duration-300 hover:border-2 hover:border-pink-400"
      >
        <div className="flex justify-end  ">
          <h4
            className={`inline-fit text-lg font-semibold px-4 py-1 rounded-full ${info.badge === "Best Seller" ? "bg-green-400" : info.badge === "Most Popular" ? "bg-amber-400" : info.badge === "Popular" ? "bg-red-400" : info.badge === "New" ? "bg-pink-400" : "white"}`}
          >
            {info.badge}
          </h4>
        </div>
        <span className="w-9 h-9">
          <img src={info.image} alt="" />
        </span>
        <h2 className="text-3xl font-bold ">{info.title}</h2>
        <h4 className="text-[#627382] ">{info.description}</h4>
        <div className="flex items-center ">
          <h2 className="text-3xl font-bold">{info.price}</h2>
          <h4 className="text-xl text-[#627382]">/{info.billingCycle}</h4>
        </div>
        <div>
          <h3 className="text-lg text-[#627382]">{info.feature1}</h3>
          <h3 className="text-lg text-[#627382]">{info.feature2}</h3>
          <h3 className="text-lg text-[#627382]">{info.feature3}</h3>
        </div>
        <button
          onClick={() => {
            setAddToCart(info.newButtonText);
          }}
          className="btn btn-primary inline-block rounded-full transform transition hover:scale-105 duration-200"
        >
          {addToCart === "Buy Now" ? "Buy Now" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default Card;
