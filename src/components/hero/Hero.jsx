import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { VscDebugStart } from "react-icons/vsc";

const hero = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen py-18">
        <div className="hero-content flex-col lg:flex-row-reverse gap-22">
          <img
            src="https://i.ibb.co.com/m52Xz1n7/banner.png"
            className="max-w-sm rounded-lg shadow-2xl w-11/12"
          />

          <div className="flex-1">
            <h4 className="text-[#4F39F6] inline-flex  gap-3 font-medium bg-[#E4D2FF] py-3 rounded-full px-5">
              <div className="flex w-6 h-6 justify-center items-center rounded-full bg-blue-300">
                <div className="flex w-4 h-4 justify-center items-center rounded-full bg-blue-500">
                  <div className="flex w-2 h-2 justify-center items-center rounded-full bg-blue-600"></div>
                </div>
              </div>
              <span>New: AI-Powered Tools Available</span>
            </h4>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-10 sm:leading-14 md:leading-18 lg:leading-22 mt-4">
              Supercharge Your <br /> <span className="text-[#4F39F6]">Digital Workflow</span>
            </h1>
            <p className="py-6 text-[#627382] text-lg leading-8">
              Access premium AI tools, design assets, templates, and
              productivity <br /> software—all in one place. Start creating
              faster today. <br /> Explore Products
            </p>
            <div className="flex gap-4">
              <button className="btn btn-primary rounded-full transform transition hover:scale-110 duration-200">
                Explore Products
                <span>
                  <FaArrowRight />
                </span>
              </button>
              <button className="btn btn-outline btn-primary rounded-full transform transition hover:scale-110 duration-200">
                <span>
                  <VscDebugStart />
                </span>{" "}
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
