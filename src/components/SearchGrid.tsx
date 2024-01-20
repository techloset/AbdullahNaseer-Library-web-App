import React from 'react';
import Card from './Card';

const CardGrid = () => {
    return (
        <div className=''>
            <h3 className='text-3xl'>Search Results</h3>
            <div className="flex justify-center items-center w-full h-full">
                <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:mx-4"> {/* Added sm:mx-4 for small screens */}
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <button className='block mx-auto mt-6 lg:w-[362px] w-[280px] lg:h-[72px] h-[48px] text-[#1565D8] font-bold bg-[#a1bbe0]'>More</button>
        </div>
    );
};

export default CardGrid;
