import React from "react";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm flex justify-between max-w-300 mx-auto p-6 rounded-2xl">
          <div >
            <a className="text-[#4F39F6] font-bold text-4xl">DigiTools</a>
          </div>
          <div>
            <ul className="flex gap-4">
              <li className="font-semibold " href="">Features</li>
              <li className="font-semibold" href="">Products</li>
              <li className="font-semibold" href="">Pricing</li>
              <li className="font-semibold" href="">Testimonials</li>
              <li className="font-semibold" href="">FAQ</li>
            </ul>
          </div>
          <div>
            <div className="flex justify-between items-center gap-4">
              <span className=" flex text-xl font-bold justify-between items-center gap-2">
                <div className="p-1.5 rounded-full border hover:cursor-pointer border-gray-200"><IoCartOutline /></div>
                <button className="btn rounded-full text-xl font-bold">Login</button>
              </span>
              <button className="btn btn-active btn-primary rounded-full">
                Get Started
              </button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
