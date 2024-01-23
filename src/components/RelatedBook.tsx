import arrowLeft from '../assets/arrowLeft.svg';
import arrowRight from '../assets/arrowRight.svg';

const RelatedBook = () => {
  return (
    <div className='parent bg-[#183B56] h-[548px] mt-7 md:mt-24 md:px-36'>
      <div className='flex justify-between pt-12 md:pt-14'>
        <div className='text text-white text-3xl font-bold'>Related Books</div>
        <div className='buttons flex '>
          <button className='h-14 w-14 border-2 mx-3 p-2 rounded-full'>
            <img className='mx-auto' src={arrowLeft} alt='Left Arrow' />
          </button>
          <button className='h-14 w-14 border-2 mx-3 p-2 rounded-full'>
            <img className='mx-auto' src={arrowRight} alt='Right Arrow' />
          </button>
        </div>
      </div>
      <div className='slider mt-10 md:mt-14 overflow-x-auto whitespace-nowrap mx-auto no-scrollbar'>
        <div className='inline-block h-[298px] w-[204px] bg-red-500 rounded-md mr-4'></div>
        <div className='inline-block h-[298px] w-[204px] bg-red-500 rounded-md mr-4'></div>
        <div className='inline-block h-[298px] w-[204px] bg-red-500 rounded-md mr-4'></div>
        <div className='inline-block h-[298px] w-[204px] bg-red-500 rounded-md mr-4'></div>
        <div className='inline-block h-[298px] w-[204px] bg-red-500 rounded-md mr-4'></div>
        <div className='inline-block h-[298px] w-[204px] bg-red-500 rounded-md mr-4'></div>
      </div>
    </div>
  );
};

export default RelatedBook;


