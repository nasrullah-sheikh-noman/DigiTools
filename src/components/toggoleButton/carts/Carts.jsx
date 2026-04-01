import React from "react";
import { MdDeleteForever } from "react-icons/md";

const Carts = () => {
  
  return (
    <div>
      <div>
        <h2 className="text-4xl font-bold pb-8 pt-2">Your Carts</h2>
        <div className="flex justify-between border border-green-600 rounded-2xl py-6 px-8 items-center">
          <div className="flex justify-between items-center gap-5">
            <div>
              <img src="https://i.ibb.co.com/9mqBXms9/portfolio.png" alt="" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-medium">AI Writing Pro</h3>
              <h3 className="font-bold text-lg">$29</h3>
            </div>
          </div>
          <button className="bg-gray-200 border p-2 rounded-full border-gray-200 hover:scale-110 transition transform duration-150 hover:cursor-pointer">
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carts;
