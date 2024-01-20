// import React from 'react'

// const ServiceSection = () => {
//   return (
//     <div className="flex md:flex-row justify-between items-center">
//       <div className='h-[265px] w-[240px] bg-slate-300'></div>
//       <div className='h-[265px] w-[240px] bg-slate-400'></div>
//       <div className='h-[265px] w-[240px] bg-slate-500'></div>
//       <div className='h-[265px] w-[240px] bg-slate-600'></div>
//     </div>
//   )
// }

// export default ServiceSection


import React from 'react';

const ServiceSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="w-full md:w-1/2 h-64 bg-slate-300 rounded-lg mb-4 md:mb-0">
        {/* Content for service 1 */}
      </div>
      <div className="w-full md:w-1/2 h-64 bg-slate-400 rounded-lg mb-4 md:mb-0">
        {/* Content for service 2 */}
      </div>
      <div className="w-full md:w-1/2 h-64 bg-slate-500 rounded-lg">
        {/* Content for service 3 */}
      </div>
      <div className="w-full md:w-1/2 h-64 bg-slate-600 rounded-lg">
        {/* Content for service 4 */}
      </div>
    </div>
  );
};

export default ServiceSection;
