import React from "react";

const Activity = () => {
  return (
    <div>
      <div className="bg-[#4F39F6]">
        <div className="  py-10 my-18">
          <div className="max-w-300 mx-auto px-8 justify-between items-center text-center space-y-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
            <div className="space-y-2">
              <h2 className="font-bold text-7xl text-white">50K</h2>
              <h5 className="text-gray-300 text-2xl">Active Users</h5>
            </div>
            <div className="hidden lg:flex divider divider-horizontal before:bg-white after:bg-white"></div>
            <div className="space-y-2">
              <h2 className="font-bold text-7xl text-white">200+</h2>
              <h5 className="text-gray-300 text-2xl">Premium Tools</h5>
            </div>
            <div className="hidden lg:flex divider divider-horizontal before:bg-white after:bg-white"></div>
            <div className="space-y-2">
              <h2 className="font-bold text-7xl text-white">4.9</h2>
              <h5 className="text-gray-300 text-2xl">Rating</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center itmes-center max-300 mx-auto space-y-4 py-4">
        <h2 className="text-5xl font-bold mx-auto">Premium Digital Tools</h2>
        <h5 className="text-[#627382] text-lg leading-6 flex mx-auto justify-center items-center text-center">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </h5>
      </div>
    </div>
  );
};

export default Activity;
