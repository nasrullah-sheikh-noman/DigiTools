import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#101727] text-white  py-24">
      <div className="max-w-300 mx-auto p-8 grid grid-cols-6">
        <div className="col-span-2 space-y-5 p-2">
          <h2 className="text-5xl font-bold">DigiTools</h2>
          <h4 className="text-gray-400 ">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </h4>
        </div>
        <div className="col-span-3 grid grid-cols-3">
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
    </div>
  );
};

export default Footer;
