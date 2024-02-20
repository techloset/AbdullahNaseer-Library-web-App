
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchBookDetails } from '../redux/slices/bookDetailsSlice';
import { RootState } from '../redux/store';
import { AppDispatch } from '../redux/store';
import Navbar from '../components/Navbar';
import RelatedBook from '../components/RelatedBook';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import {Book} from "../types/types"

const BookDetails: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const dispatch = useDispatch<AppDispatch>();

  const bookDetailsState = useSelector((state: RootState) => state.bookDetails);

  useEffect(() => {
    if (id) {
      dispatch(fetchBookDetails({ id } as Book));
    }
  }, [dispatch, id]);

  if (bookDetailsState.isLoading) {
    return <div className='flex justify-center items-center min-h-screen'><Loader/></div>;
  }

  if (bookDetailsState.isError) {
    return <p>Error fetching book details</p>;
  }

  const bookDetails = bookDetailsState.data;

  if (!bookDetails) {
    return <p>Book details not found</p>;
  }

  const title = bookDetails.volumeInfo?.title || 'Title Not Available';
  const subtitle = bookDetails.volumeInfo?.subtitle || '';
  const description = bookDetails.volumeInfo?.description || '';
  const previewLink = bookDetails.volumeInfo?.previewLink || '';
  const thumbnail = bookDetails.volumeInfo?.imageLinks?.thumbnail || '';

  return (
    <div>
      <div className='mx-6 lg:mx-36'>
        <Navbar />
      </div> 
      <div className="mt-28 mx-aut sm:px-6 mx-6 lg:mx-36">
        <div className="flex flex-col md:flex-row justify-center md:justify-between mx-4">
          <div className="md:flex-1 px-4 text-center md:text-left mt-4 mb-8 md:mb-0 relative">
            <h2 className="text-3xl md:text-5xl font-bold italic md:leading-[60px] text-customTextColour mb-5">
              <span className="text-customTextColour">{title}</span>
            </h2>
            <p className="text-base md:text-lg mb-4 font-semibold">
              {subtitle}
            </p>
            <div>
              <p className="text-gray-600 text-sm md:text-base mt-7">
                {description}
              </p>
            </div>
            <a href={previewLink} target='_blank' rel='noopener noreferrer'>
              <button className="text-white bg-[#1565D8] border rounded-md mt-7 w-[194px] h-[195px] md:w-[228px] md:h-[58px] absolute bottom-[-80px] left-1/2 transform -translate-x-1/2 md:left-7 md:transform-none">
                See on Google Books
              </button>
            </a>          
          </div>
          <div className="md:flex-1 flex justify-center md:justify-end items-center md:mt-0">
            <div className="md:w-[488px] md:h-[580px] h-[333px] w-[280px] rounded-lg bg-gray-100 mx-auto md:mx-0">
              <div className='w-full h-full flex justify-center items-center'>
                <img
                  className="w-36 h-[215px] md:w-[250px] md:h-[375px] object-cover"
                  src={thumbnail}
                  alt="Product Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <RelatedBook/>
      <div className='mx-6 lg:mx-36'>
        <Footer />
      </div>
    </div>
  );
};

export default BookDetails;
