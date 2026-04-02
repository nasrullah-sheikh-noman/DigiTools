import React from "react";

const Steps = () => {
  return (
    <div>
      <div className="max-w-300 mx-auto justify-center items-center text-center space-y-3 my-38">
        <div className="space-y-4 mb-16">
          <h2 className="text-4xl font-bold">Get Started in 3 Steps</h2>
          <h4 className="text-gray-500 text-xl">
            Start using premium digital tools in minutes, not hours.
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border border-gray-400 rounded-lg px-6 py-10 space-y-3.5 bg-gray-50 hover:scale-105 transition transform duration-300">
            <div className="text-white flex bg-blue-600 rounded-full w-fit px-1.5 py-0.5 ml-auto">
              <h2 className="text-center items-center justify-center">01</h2>
            </div>
            <div className="inline-block bg-blue-100 rounded-full w-fit p-3">
              <img src="/src/assets/user.png" alt="user" />
            </div>
            <div className="space-y-2.5">
              <h2 className="text-2xl font-bold">Create Account</h2>
              <h4 className="text-gray-400 text-lg">
                Sign up for free in seconds. No credit card required to get
                started.
              </h4>
            </div>
          </div>
          <div className="border border-gray-400 rounded-lg px-6 py-10 space-y-3.5 bg-gray-50 hover:scale-105 transition transform duration-300">
            <div className="text-white flex bg-blue-600 rounded-full w-fit px-1.5 py-0.5 ml-auto">
              <h2 className="text-center items-center justify-center">02</h2>
            </div>
            <div className="inline-block bg-blue-100 rounded-full w-fit p-3">
              <img src="/src/assets/package.png" alt="user" />
            </div>
            <div className="space-y-2.5">
              <h2 className="text-2xl font-bold">Choose Products</h2>
              <h4 className="text-gray-400 text-lg">
                Browse our catalog and select the toolsthat fit your needs.
              </h4>
            </div>
          </div>
          <div className="border border-gray-400 rounded-lg px-6 py-10 space-y-3.5 bg-gray-50 hover:scale-105 transition transform duration-300">
            <div className="text-white flex bg-blue-600 rounded-full w-fit px-1.5 py-0.5 ml-auto">
              <h2 className="text-center items-center justify-center">03</h2>
            </div>
            <div className="inline-block bg-blue-100 rounded-full w-fit p-3">
              <img src="/src/assets/rocket.png" alt="user" />
            </div>
            <div className="space-y-2.5">
              <h2 className="text-2xl font-bold">Start Creating</h2>
              <h4 className="text-gray-400 text-lg">
                Download and start using your premium tools immediately.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
