import React from "react";
import { IoCartOutline } from "react-icons/io5";

const Navbar = ({ cartItem }) => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm flex justify-between max-w-300 mx-auto p-2 sm:p-3 md:p-5 lg:p-6 rounded-2xl">
        <div>
          <a className="text-[#4F39F6] font-bold text-2xl md:text-3xl lg:text-4xl">DigiTools</a>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex gap-4">
            <a className="font-semibold " href="/features">
              Features 
            </a>
            <a className="font-semibold" href="/products">
              Products
            </a>
            <a className="font-semibold" href="/pricing">
              Pricing
            </a>
            <a className="font-semibold" href="/testimonials">
              Testimonials
            </a>
            <a className="font-semibold" href="faq">
              FAQ
            </a>
          </ul>
        </div>
        <div>
          <div className="flex justify-between items-center gap-4">
            <span className=" flex text-xl font-bold justify-between items-center gap-2 ">
              <div className="flex relative">
                
                <div className="p-1 lg:p-1.5 rounded-full border hover:cursor-pointer border-gray-200 transform transition hover:scale-102 md:hover:scale-105 lg:hover:scale-115 duration-200">
                  <IoCartOutline />
                </div>
                <span className="absolute bottom-6 left-5 text-sm font-semibold ">
                  {cartItem <= 0 ? "" : cartItem}
                </span>
              </div>
              <button className="btn rounded-full text-lg lg:text-xl font-medium md:font-semibold lg:font-bold transform transition hover:scale-102 md:hover:scale-105 lg:hover:scale-110 duration-200 px-2 md:px-3 lg:px-4 py-1 md:py-1.5 ld:my-2">
                Login
              </button>
            </span>
            <button className="btn btn-active btn-primary rounded-full transform transition hover:scale-102 md:hover:scale-105 lg:hover:scale-110 duration-200 px-3 md:px-4 lg:px-6 py-1 md:py-1.5 lg:py-2">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
