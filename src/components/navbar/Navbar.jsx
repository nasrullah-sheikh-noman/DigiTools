import React from "react";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm flex justify-between max-w-300 mx-auto">
          <div >
            <a className="text-[#4F39F6] font-bold text-4xl">DigiTools</a>
          </div>
          <div>
            <ul className="flex gap-4">
              <li href="">Features</li>
              <li href="">Products</li>
              <li href="">Pricing</li>
              <li href="">Testimonials</li>
              <li href="">FAQ</li>
            </ul>
          </div>
          <div>
            <div className="flex justify-between items-center gap-4">
              <span className="flex justify-between items-center gap-3">
                <IoCartOutline />
                Login
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
