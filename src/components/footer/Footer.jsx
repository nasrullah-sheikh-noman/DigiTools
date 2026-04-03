import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#101727] text-white pt-10 sm:pt-16 md:pt-20 lg:pt-24">
      <div className="max-w-300 mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className=" p-8 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 justify-center space-y-12 space-x-5">
          <div className="col-span-1 lg:col-span-2 space-y-5 p-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">DigiTools</h2>
            <h4 className="text-gray-400 ">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </h4>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-3 space-x-5 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 space-y-8 md:pl-8">
            <div className="space-y-5">
              <h2 className="text-xl ">Product</h2>
              <div className="space-y-3">
                <h4 className="text-gray-400">Features</h4>
                <h4 className="text-gray-400">Pricing</h4>
                <h4 className="text-gray-400">Templates</h4>
                <h4 className="text-gray-400">Integrations</h4>
              </div>
            </div>
            <div className="space-y-5">
              <h2 className="text-xl ">Company</h2>
              <div className="space-y-3">
                <h4 className="text-gray-400">About</h4>
                <h4 className="text-gray-400">Blog</h4>
                <h4 className="text-gray-400">Careers</h4>
                <h4 className="text-gray-400">Press</h4>
              </div>
            </div>
            <div className="space-y-5">
              <h2 className="text-xl ">Resources</h2>
              <div className="space-y-3">
                <h4 className="text-gray-400">Documentation</h4>
                <h4 className="text-gray-400">Help Center</h4>
                <h4 className="text-gray-400">Community</h4>
                <h4 className="text-gray-400">Contact</h4>
              </div>
            </div>
          </div>
          <div className="space-y-5">
            <h2 className="text-2xl">Social Links</h2>
            <div className="flex gap-4">
              <FaFacebook className="w-6 h-6" />
              <BsInstagram className="w-6 h-6" />
              <FaTwitter className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="mt-6 sm:mt-10 md:mt14 lg:mt-16 max-w-300 mx-auto">
          <h2 className="bg-gray-600 h-px "></h2>
        </div>
        <div className="max-w-300 mx-auto p-10 space-y-8 md:flex justify-between text-gray-400">
          <div>
            <h2>© 2026 Digitools. All rights reserved.</h2>
          </div>
          <div className="sm:flex gap-10 ">
            <h2>Privacy Policy</h2>
            <h2>Terms of Service</h2>
            <h2>Cookies</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
