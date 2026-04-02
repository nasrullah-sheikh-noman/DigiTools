import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";

const Pricing = () => {
  return (
    <div>
      <div className="max-w-300 mx-auto p-4 my-34 space-y-16">
        <div className="space-y-3">
          <h2 className="text-4xl font-bold text-center">
            Simple, Transparent Pricing
          </h2>
          <h4 className="text-lg text-gray-500 text-center">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border border-gray-300 rounded-2xl p-8 bg-gray-50 space-y-5">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold">Starter</h2>
              <h4 className="text-lg text-gray-600">
                Perfect for getting started
              </h4>
            </div>
            <span className="flex items-center">
              <h1 className="text-4xl font-bold">$0</h1>
              <h2 className="text-gray-500 text-xl">/Month</h2>
            </span>
            <div className="space-y-1">
              <span className="flex items-center">
                <IoCheckmarkSharp className="text-green-500" />
                <h4>Access to 10 free tools</h4>
              </span>
              <span className="flex items-center">
                <IoCheckmarkSharp className="text-green-500" />
                <h4>Basic templates</h4>
              </span>
              <span className="flex items-center">
                <IoCheckmarkSharp className="text-green-500" />
                <h4>Community support</h4>
              </span>
              <span className="flex items-center">
                <IoCheckmarkSharp className="text-green-500" />
                <h4>1 project per month</h4>
              </span>
            </div>
            <button className="btn btn-primary w-full rounded-full mt-16 py-5 text-sm">Get Started Free</button>
          </div>
          <div className="border border-gray-300 rounded-2xl p-8 bg-gray-50 space-y-5">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold">Pro</h2>
              <h4 className="text-lg text-gray-600">
                Best for professionals
              </h4>
            </div>
            <span className="flex items-center">
              <h1 className="text-4xl font-bold">$29</h1>
              <h2 className="text-gray-500 text-xl">/Month</h2>
            </span>
            <div className="space-y-1">
              <span className="flex items-center">
                <IoCheckmarkSharp className="text-green-500" />
                <h4>Access to all premium tools</h4>
              </span>
              <span className="flex items-center">
                <IoCheckmarkSharp className="text-green-500" />
                <h4>Unlimited templates</h4>
              </span>
              <span className="flex items-center">
                <IoCheckmarkSharp className="text-green-500" />
                <h4>Priority support</h4>
              </span>
              <span className="flex items-center">
                <IoCheckmarkSharp className="text-green-500" />
                <h4>Unlimited projects</h4>
              </span>
              <span className="flex items-center">
                <IoCheckmarkSharp className="text-green-500" />
                <h4>Cloud sync</h4>
              </span>
              <span className="flex items-center">
                <IoCheckmarkSharp className="text-green-500" />
                <h4>Advanced analytics</h4>
              </span>
            </div>
            <button className="btn btn-primary w-full rounded-full mt-2 py-5 text-sm">Start Pro Trial</button>
          </div>
          <div className="border border-gray-300 rounded-2xl p-8 bg-gray-50 space-y-5">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold">Enterprise</h2>
              <h4 className="text-lg text-gray-600">
                For teams and businesses
              </h4>
            </div>
            <span className="flex items-center">
              <h1 className="text-4xl font-bold">$99</h1>
              <h2 className="text-gray-500 text-xl">/Month</h2>
            </span>
            <div className="space-y-1">
              <span className="flex items-center">
                <IoCheckmarkSharp className="text-green-500" />
                <h4>Everything in Pro</h4>
              </span>
              <span className="flex items-center">
                <IoCheckmarkSharp className="text-green-500" />
                <h4>Team collaboration</h4>
              </span>
              <span className="flex items-center">
                <IoCheckmarkSharp className="text-green-500" />
                <h4>Custom integrations</h4>
              </span>
              <span className="flex items-center">
                <IoCheckmarkSharp className="text-green-500" />
                <h4>Dedicated support</h4>
              </span>
              <span className="flex items-center">
                <IoCheckmarkSharp className="text-green-500" />
                <h4>SLA guarantee</h4>
              </span>
              <span className="flex items-center">
                <IoCheckmarkSharp className="text-green-500" />
                <h4>Custom branding</h4>
              </span>
            </div>
            <button className="btn btn-primary w-full rounded-full mt-2 py-5 text-sm">Contact Sales</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
