import React from "react";

const Empty = () => {
  return (
    <div>
      <div>
        <h2 className="text-4xl font-bold">Your Carts</h2>
        <div className="my-12 flex flex-col justify-center items-center text-center space-y-4 ">
          <img
            className="w-40 h-40"
            src="https://i.ibb.co.com/tTCXGmFk/3081986.png"
            alt=""
          />
          <h2 className="text-gray-500 text-2xl font-bold">
            Your cart is empty
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Empty;
