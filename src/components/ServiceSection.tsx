import React from 'react';

const ServiceSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center flex-wrap">
      {/* Card 1 */}
      <div className="w-full md:w-1/2 lg:w-1/4 p-2">
        <div className="h-[240px] bg-slate-300 rounded-lg">
          {/* Content for service 1 */}
        </div>
      </div>
      {/* Card 2 */}
      <div className="w-full md:w-1/2 lg:w-1/4 p-2">
        <div className="h-[240px] bg-slate-400 rounded-lg">
          {/* Content for service 2 */}
        </div>
      </div>
      {/* Card 3 */}
      <div className="w-full md:w-1/2 lg:w-1/4 p-2">
        <div className="h-[240px] bg-slate-500 rounded-lg">
          {/* Content for service 3 */}
        </div>
      </div>
      {/* Card 4 */}
      <div className="w-full md:w-1/2 lg:w-1/4 p-2">
        <div className="h-[240px] bg-slate-600 rounded-lg">
          {/* Content for service 4 */}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
