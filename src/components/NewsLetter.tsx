// import emailIcon from '../assets/emailIcon.svg'
// const NewsLetter: React.FC = () => {
//   return (
//     <section className='bg-[#1565D8] rounded-md p-4 md:p-8 lg:p-12 xl:p-16 h-auto md:h-56 flex flex-col md:flex-row justify-between items-center'>
//       <div className="text md:w-1/2 mb-4 md:mb-0 md:mr-4">
//         <p className="text-center text-white italic md:text-left text-3xl font-semibold">
//           Be the First to know Our Promo before others!
//         </p>
//       </div>
//       <div className="mx-auto md:w-1/2 flex flex-col items-center justify-center text-center">
//         <div className="bg-white rounded-lg p-2 mt-2 md:flex md:w-full md:justify-between w-auto ">
//           <input className=' w-full md:w-auto outline-none text-center text-gray-500 mb-2 md:mb-0' type="email" placeholder='Type your Email' />
//           <button className="ml-0 md:ml-2 bg-[#FAAD13] text-white px-4 py-2 rounded-lg cursor-pointer text-base font-bold">
//           Register Now
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewsLetter;


import emailIcon from '../assets/emailIcon.svg';

const NewsLetter: React.FC = () => {
  return (
    <section className='bg-[#1565D8] rounded-md p-4 md:p-8 lg:p-12 xl:p-16 h-auto md:h-56 flex flex-col md:flex-row justify-between items-center'>
      <div className="text md:w-1/2 mb-4 md:mb-0 md:mr-4">
        <p className=" text-white italic md:text-left text-2xl lg:text-4xl font-semibold font-sans">
          Be the First to know Our Promo before others!
        </p>
      </div>
      <div className="mx-auto md:w-1/2 flex flex-col items-center justify-center text-center">
        <div className="bg-white rounded-lg p-2 mt-2 md:flex md:w-full md:justify-between w-auto ">
          <div className="relative flex items-center">
            <img src={emailIcon} className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6" alt="Email Icon" />
            <input className='pl-10 w-full md:w-auto outline-none  text-gray-500 mb-2 md:mb-0' type="email" placeholder='Type your Email' />
          </div>
          <button className="ml-0 md:ml-2 w-full lg:w-auto bg-[#FAAD13] text-white px-4 py-2 rounded-lg cursor-pointer text-base font-bold">
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
