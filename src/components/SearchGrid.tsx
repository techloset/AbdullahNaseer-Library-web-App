// // // import React from 'react';
// // // import Card from './Card';

// // // const CardGrid = () => {
// // //     return (
// // //         <div className=''>
// // //             <h3 className='text-3xl'>Search Results</h3>
// // //             <div className="flex justify-center items-center w-full h-full">
// // //                 <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:mx-4"> {/* Added sm:mx-4 for small screens */}
// // //                     <Card />
// // //                     <Card />
// // //                     <Card />
// // //                     <Card />
// // //                     <Card />
// // //                     <Card />
// // //                     <Card />
// // //                     <Card />
// // //                     <Card />
// // //                     <Card />
// // //                 </div>
// // //             </div>
// // //             <button className='block mx-auto mt-6 lg:w-[362px] w-[280px] lg:h-[72px] h-[48px] text-[#1565D8] font-bold bg-[#a1bbe0]'>More</button>
// // //         </div>
// // //     );
// // // };

// // // export default CardGrid;



// // import React from 'react';
// // import Card from './Card';

// // const CardGrid = () => {
// //   return (
// //     <div className='  '> 
// //       <h3 className='text-3xl mb-6'>Search Results</h3>
// //       <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
// //         <Card />
// //         <Card />
// //         <Card />
// //         <Card />
// //         <Card />
// //         <Card />
// //         <Card />
// //         <Card />
// //         <Card />
// //         <Card />
// //       </div>
// //       <button className='block mx-auto mt-6 lg:w-[362px] w-[280px] lg:h-[72px] h-[48px] rounded-md text-[#1565D8] font-bold bg-[#a1bbe0]'>More</button>
// //     </div>
// //   );
// // };

// // export default CardGrid;



// import Card from './Card';

// const CardGrid: React.FC = () => {
//   return (
//     <>
//       <div className='searchHero mt-48 mb-16 text-center'>
//         <h1 className='text-5xl mb-16'>Search Books</h1>
//         <div className="search w-[236px] h-[46px] md:w-[610px] md:h-[72px] border rounded-lg m-auto">
//           <input type="text" className='w-full h-full outline-none bg-slate-200 px-10' placeholder='Search' />
//         </div>
//       </div>
//       <div className='text-center flex flex-col items-center justify-center'>
//         <h3 className='text-3xl mb-6 italic'>Search Results</h3>
//         <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
//           <Card />
//           <Card />
//           <Card />
//           <Card />
//           <Card />
//           <Card />
//           <Card />
//           <Card />
//           <Card />
//           <Card />
//         </div>
//         <button className='block mx-auto mt-6 text-base lg:w-[362px] w-[280px] lg:h-[72px] rounded-md h-[48px] text-linkColour italic font-bold bg-[#cfe1fa]'>More</button>
//       </div>
//     </>

//   );
// };

// export default CardGrid;



// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState, AppDispatch } from '../redux/store';
// import { searchBooks } from '../redux/slices/searchBoookSlice'; // Adjust the path accordingly
// import Card from './Card';

// const CardGrid: React.FC = () => {
//   const dispatch: AppDispatch = useDispatch();
//   const [query, setQuery] = useState('');

//   // Fetch search results from Redux store
//   const { isLoading, data, isError } = useSelector((state: RootState) => state.searchBooks);

//   // Dispatch searchBooks action on input change
//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setQuery(event.target.value);
//     dispatch(searchBooks({ query: event.target.value, startIndex: 0, maxResults: 10 })); // Adjust maxResults accordingly
//   };
//   const searchResults = data?.items || [];

//   return (
//     <>
//       <div className='searchHero mt-48 mb-16 text-center'>
//         <h1 className='text-5xl mb-16'>Search Books</h1>
//         <div className="search w-[236px] h-[46px] md:w-[610px] md:h-[72px] border rounded-lg m-auto">
//           <input
//             type="text"
//             className='w-full h-full outline-none bg-slate-200 px-10'
//             placeholder='Search'
//             value={query}
//             onChange={handleInputChange}
//           />
//         </div>
//       </div>
//       <div className='text-center flex flex-col items-center justify-center'>
//         <h3 className='text-3xl mb-6 italic'>Search Results</h3>
//         {isLoading ? (
//           <div>Loading your Books</div>
//         ) : (
//           <>
//             <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
//               {searchResults.map((book: any) => (
//                 <Card key={book.id} book={book} />
//               ))}
//             </div>
//           </>
//         )
//         }

//         <button className='block mx-auto mt-6 text-base lg:w-[362px] w-[280px] lg:h-[72px] rounded-md h-[48px] text-linkColour italic font-bold bg-[#cfe1fa]'>
//           More
//         </button>
//       </div>
//     </>
//   );
// };

// export default CardGrid;



import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { searchBooks } from '../redux/slices/searchBoookSlice'; // Adjust the path accordingly
import Card from './Card';

const CardGrid: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [query, setQuery] = useState('');

  // Fetch search results from Redux store
  const { isLoading, data, isError } = useSelector((state: RootState) => state.searchBooks);

  // Dispatch searchBooks action on input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    dispatch(searchBooks({ query: event.target.value, startIndex: 0, maxResults: 10 })); // Adjust maxResults accordingly
  };

  return (
    <>
      <div className='searchHero mt-48 mb-16 text-center'>
        <h1 className='text-5xl mb-16'>Search Books</h1>
        <div className="search w-[236px] h-[46px] md:w-[610px] md:h-[72px] border rounded-lg m-auto">
          <input
            type="text"
            className='w-full h-full outline-none bg-slate-200 px-10'
            placeholder='Search'
            value={query}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className='text-center flex flex-col items-center justify-center'>
        <h3 className='text-3xl mb-6 italic'>Search Results</h3>

        {isLoading ? (
          <div>Loading your Books</div>
        ) : isError ? (
          <div>Error searching books</div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {data?.items?.map((book: any) => (
              <Card key={book.id} book={book} />
            ))}
          </div>
        )}

        {!isLoading && !isError && (
          <button className='block mx-auto mt-6 text-base lg:w-[362px] w-[280px] lg:h-[72px] rounded-md h-[48px] text-linkColour italic font-bold bg-[#cfe1fa]'>
            More
          </button>
        )}
      </div>
    </>
  );
};

export default CardGrid;
