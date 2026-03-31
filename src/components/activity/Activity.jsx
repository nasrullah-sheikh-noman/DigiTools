import React from 'react';

const Activity = () => {
  return (
    <div>
      <div className='bg-[#4F39F6] py-10 my-18'>
        <div className='max-w-250 mx-auto flex justify-between'>
          <div className='space-y-2'>
            <h2 className='font-bold text-7xl text-white'>50K</h2>
            <h5 className='text-gray-300 text-2xl'>Active Users</h5>
          </div>
          <div className="divider divider-horizontal before:bg-white after:bg-white"></div>
          <div className='space-y-2'>
            <h2 className='font-bold text-7xl text-white'>200+</h2>
            <h5 className='text-gray-300 text-2xl'>Premium Tools</h5>
          </div>
          <div className="divider divider-horizontal before:bg-white after:bg-white"></div>
          <div className='space-y-2'>
            <h2 className='font-bold text-7xl text-white'>4.9</h2>
            <h5 className='text-gray-300 text-2xl'>Rating</h5>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center itmes-center max-300 mx-auto space-y-4 py-4'>
        <h2 className='text-5xl font-bold mx-auto'>Premium Digital Tools</h2>
        <h5 className='text-[#627382] text-lg leading-6 flex mx-auto justify-center items-center text-center'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</h5>
      </div>

    </div>
  );
};

export default Activity;