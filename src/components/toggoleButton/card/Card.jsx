import React, { use, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";

const Card = ({ data, cartItem, setCartItem }) => {

  const [addToCart, setAddToCart] = useState("Buy Now");

  return (
    <div>
      <div
        key={data.id}
        className="card p-6 space-y-4 border-2 border-gray-300 rounded-2xl transform transition hover:scale-105 duration-300 hover:border-2 hover:border-pink-400"
      >
        <div className="flex justify-end  ">
          <h4
            className={`inline-fit text-lg font-semibold px-4 py-1 rounded-full ${data.badge === "Best Seller" ? "bg-green-400" : data.badge === "Most Popular" ? "bg-amber-400" : data.badge === "Popular" ? "bg-red-400" : data.badge === "New" ? "bg-pink-400" : "white"}`}
          >
            {data.badge}
          </h4>
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
        <button
          onClick={() => {
            if (addToCart === "Buy Now" ) {
              setCartItem(cartItem + 1);
            }
            else if (addToCart === "Add to Cart") {
              setCartItem(cartItem + 0);
            }  
            
            setAddToCart(data.newButtonText);
          }}
          className={`btn ${addToCart === "Buy Now" ? "btn-primary" : "btn-success"} inline-block rounded-full transform transition hover:scale-105 duration-200 font-bold `}
        >
          {addToCart === "Buy Now" ? (
            "Buy Now"
          ) : (
            <span className="flex items-center justify-center gap-2 font-bold">
              <IoMdCheckmark className="font-extrabold text-2xl" />
              Added to Cart
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Card;
