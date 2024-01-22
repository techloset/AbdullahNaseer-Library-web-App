// import React from 'react';
// import Card from './Card';
// import MonthCard from './MonthCard';

// const HeroGrid = () => {
//   return (
//     <div className='flex  flex-wrap gap-5'>
//       <div className="w-full sm:w-2/3 p-4 flex flex-col bg-slate-100 ">
//         <h1 className="font-bold italic text-4xl text-[#183B56]">Recommended Books</h1>
//         <div className="flex flex-wrap gap-4 justify-center md:justify-start">
//           <Card />
//           <Card />
//           <Card />
//           <Card />
//           <Card />
//           <Card /> 
//         </div>
//         <button className="bg-[#619cee] w-64 md:w-2/3 mx-auto text-center p-2 text-[#1565D8]">More Recommendations</button>
//       </div>
//       <aside className='w-full md:w-1/4 p-4 flex flex-col items-center gap-5'>
//         <div>
//           <h1 className="font-bold italic text-4xl text-[#183B56]">Recommended</h1>
//           <div className='bg-slate-100 flex flex-col items-center'>
//             <MonthCard />
//             <MonthCard />
//             <MonthCard />
//             <MonthCard />
//             <MonthCard />
//           </div>
//         </div>
//       </aside>
//     </div>
//   );
// };

// export default HeroGrid;


import React from 'react';
import Card from './Card';
import MonthCard from './MonthCard';

const HeroGrid = () => {
  return (
    <div className='flex flex-wrap gap-5 items-start justify-center md:justify-start '>
      {/* Main content */}
      <div className="w-full sm:w-2/3 p-4 flex flex-col ">
        <h1 className="font-bold italic text-4xl text-[#183B56]">Recommended Books</h1>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card /> 
        </div>
        <button className="bg-[#619cee] w-64 md:w-2/3 mx-auto text-center p-2 text-[#1565D8]">More Recommendations</button>
      </div>

      {/* Aside content */}
      <aside className='w-full md:w-1/4 p-4 flex flex-col items-center md:ml-20 gap-5'>
        <div className=' border-2 border-gray-200 p-1 rounded-md'>
          <h1 className="font-bold italic text-4xl text-[#183B56]">Recommended</h1>
          <div className=' flex flex-col items-center'>
            <MonthCard />
            <MonthCard />
            <MonthCard />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default HeroGrid;
