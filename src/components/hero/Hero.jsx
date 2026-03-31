import React from "react";
import { VscDebugStart } from "react-icons/vsc";

const hero = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-22">
          <img
            flex-1
            src="https://i.ibb.co.com/m52Xz1n7/banner.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />

          <div className="flex-1">
            <h1 className="text-7xl font-bold leading-22">
              Supercharge Your <br /> Digital Workflow
            </h1>
            <p className="py-6 text-[#627382] text-lg leading-8">
              Access premium AI tools, design assets, templates, and
              productivity <br /> software—all in one place. Start creating faster
              today. <br /> Explore Products
            </p>
            <div className="flex gap-4">
              <button className="btn btn-primary rounded-full">Explore Products</button>
            <button class="btn btn-outline btn-primary rounded-full"><span><VscDebugStart /></span> Watch Demo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
