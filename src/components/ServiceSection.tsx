import serviceArrow from "../assets/serviceArrow.svg";
import serviceBook from "../assets/serviceBook.svg";
import serviceBox from "../assets/serviceBox.svg";
import serviceDiamond from "../assets/serviceDiamond.svg";
import buttonArrow from "../assets/buttonArrow.svg";
const ServiceSection: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center items-center relative">
      <div className=" w-1/2 lg:w-1/4  flex justify-center items-center border rounded-md border-gray-100 ">
        <div className="w-[140px] h-[182px] md:h-[240px] md:w-[265px]  rounded-lg flex flex-col justify-center items-center text-center">
          <img src={serviceArrow} alt="" className="mx-auto h-16 w-16" />
          <p className="font-bold mt-4 sm:mt-2 md:mt-10 md:text-[22px] italic text-customTextColour">
            Business & Finance
          </p>
          <p className="mt-1 sm:mt-1 md:mt-3 text-sm md:text-base italic text-[#5A7184]">
            Books about Business World
          </p>
        </div>
      </div>
      <div className=" w-1/2 lg:w-1/4 flex justify-center items-center border rounded-md border-gray-100">
        <div className="w-[140px] h-[182px] md:h-[240px] md:w-[265px]  rounded-lg flex flex-col justify-center items-center text-center">
          <img src={serviceBook} alt="" className="mx-auto h-16 w-16" />
          <p className="font-bold mt-4 sm:mt-2 md:mt-10 md:text-[22px] italic text-customTextColour">
            Business & Finance
          </p>
          <p className="mt-1 sm:mt-1 md:mt-3 text-sm md:text-base italic text-[#5A7184]">
            Books about Business World
          </p>
        </div>
      </div>
      <div className=" w-1/2 lg:w-1/4 flex justify-center items-center border rounded-md border-gray-100">
        <div className="w-[140px] h-[182px] md:h-[240px] md:w-[265px]  rounded-lg flex flex-col justify-center items-center text-center">
          <img src={serviceBox} alt="" className="mx-auto h-16 w-16" />
          <p className="font-bold mt-4 sm:mt-2 md:mt-10 md:text-[22px] italic text-customTextColour">
            Business & Finance
          </p>
          <p className="mt-1 sm:mt-1 md:mt-3 text-sm md:text-base italic text-[#5A7184]">
            Books about Business World
          </p>
        </div>
      </div>
      <div className=" w-1/2 lg:w-1/4 flex justify-center items-center border rounded-md border-gray-100">
        <div className="w-[140px] h-[182px] md:h-[240px] md:w-[265px]  rounded-lg flex flex-col justify-center items-center text-center">
          <img src={serviceDiamond} alt="" className="mx-auto h-16 w-16" />
          <p className="font-bold mt-4 sm:mt-2 md:mt-10 md:text-[22px] italic text-customTextColour">
            Business & Finance
          </p>
          <p className="mt-1 sm:mt-1 md:mt-3 text-sm md:text-base italic text-[#5A7184]">
            Books about Business World
          </p>
        </div>
      </div>
      <button className=" shadow-lg border rounded-full bg-slate-200 h-14 w-14 flex justify-center items-center lg:absolute lg:right-0  ">
        <img src={buttonArrow} alt="" />
      </button>
    </div>

  );
};

export default ServiceSection;
