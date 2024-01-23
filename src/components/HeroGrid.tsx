import React from 'react';
import Card from './Card';
import MonthCard from './MonthCard';
import Aside from './Aside';

const HeroGrid = () => {
  return (
    <div className='flex flex-wrap gap-5 items-start justify-center  lg:justify-start'>
      {/* Main content */}
      <div className='w-full md:w-2/3 md:mt-4'>
        <h1 className="font-bold italic text-4xl text-[#183B56] mb-5">Recommended Books</h1>
        <div className='slider pt-8 md:pt-0 mt-5 md:mt-0 overflow-x-auto whitespace-nowrap mx-auto no-scrollbar md:flex md:flex-wrap'>
          <div className='inline-block mr-4 mb-5'><Card /></div>
          <div className='inline-block mr-4 mb-5'><Card /></div>
          <div className='inline-block mr-4 mb-5'><Card /></div>
          <div className='inline-block mr-4 mb-5'><Card /></div>
          <div className='inline-block mr-4 mb-5'><Card /></div>
          <div className='inline-block mr-4 mb-5'><Card /></div>
        </div>
        <button className=' block mx-auto w-64 h-12 md:h-16 md:w-[60%] text-[#1565D8] text-md font-bold rounded-md bg-[#b5cef0]'>See More</button>
      </div>
      {/* Aside content */}
      <Aside/>
    </div>
  );
};
export default HeroGrid;
