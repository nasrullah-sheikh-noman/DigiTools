import React from 'react';

const WorkFlow = () => {
  return (
    <div className='bg-blue-700 py-22 text-white'>
      <div className='max-w-300 mx-auto p-4 md:p-6 lg:p-8'>
        <div className='text-center space-y-6'>
          <h2 className='text-5xl font-bold'>Ready to Transform Your Workflow?</h2>
          <h4 className='text-lg text-gray-300'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</h4>
        </div>
        <div className='text-center space-x-5.5 my-14'>
          <button className="btn  w-fit rounded-full py-6 px-8">Explore Products</button>
          <button className="btn btn-outline btn-primary text-white border py-6 px-8 border-white w-fit rounded-full  ">View Pricing</button>
        </div>
        <h2 className='text-center text-lg text-gray-300'>14-day free trial • No credit card required • Cancel anytime</h2>
      </div>
    </div>
  );
};

export default WorkFlow;