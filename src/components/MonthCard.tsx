
const MonthCard: React.FC = () => {
    return (
        <div className="relative w-[270px] h-[312px] md:w-[300px] md:h-[260px] rounded-md md:flex md:flex-row border-2">
            <div className="absolute md:static w-[92px] h-[137px] left-20 top-[-30px] md:h-auto md:w-auto md:flex-1">
                <img className=' md:pl-2 w-full h-full md:h-2/3 object-cover md:mt-10 rounded-md' src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="picture" />
            </div>
            <div className="mt-[132px] md:mt-0 md:flex-1 p-4 flex flex-col justify-between text-center md:text-left">
                <div>
                    <p className="text-lg font-bold italic text-customTextColour mb-2">The World of Abstract Art</p>
                    <p className=" text-customTextColour text-base font-thin">Art & Design</p>
                    <p className="text-linkColour italic text-sm mt-6 font-bold">$25.00</p>
                </div>
                <div className="flex justify-between items-center mt-2 md:mt-3">
                    <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded-full">Buy Now</button>
                    <button className="pr-4 py-2 rounded-md">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.79444 15.7841L16.5972 8.75993C18.5765 6.71737 18.4604 3.33534 16.2526 1.45095C14.3261 -0.190812 11.4609 0.10448 9.69251 1.9291L8.99992 2.64276L8.30734 1.9291C6.54249 0.10448 3.67376 -0.190812 1.74721 1.45095C-0.460588 3.33534 -0.576631 6.71737 1.39915 8.75993L8.20187 15.7841C8.64132 16.2377 9.35499 16.2377 9.79444 15.7841Z" fill="#959EAD" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MonthCard;
