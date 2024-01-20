// import React from 'react';
// import SearchGrid from '../components/SearchGrid';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// const Search = () => {
//     return (
//         <div className='mx-6 lg:mx-36'>
//             <Navbar />
//             <div className='searchHero flex flex-col justify-center items-center mt-8 sm:mt-48 mb-16'>
//                 <h1 className='text-5xl mb-8 sm:mb-16'>Search Books</h1>
//                 <div className="search w-full sm:w-[236px] h-[46px] border rounded-lg">
//                     <input type="text" className='w-full h-full outline-none bg-slate-200 px-4 sm:px-10' placeholder='Search' />
//                 </div>
//             </div>
//             <SearchGrid />
//             <Footer />
//         </div>
//     );
// };

// export default Search;


import React from 'react'
import SearchGrid from '../components/SearchGrid'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const Search = () => {
    return (
        <div className='mx-6 lg:mx-36'>
            <Navbar />
            <div className='searchHero flex flex-col justify-center items-center mt-48 mb-16 '>
                <h1 className=' text-5xl mb-16'>Search Books</h1>
                <div className="search w-[236px] h-[46px] md:w-[610px] md:h-[72px] border rounded-lg">
                    <input type="text" className=' w-full h-full outline-none bg-slate-200 px-10 ' placeholder='Search' />
                </div>
            </div>
            <SearchGrid />
            <Footer />
        </div>
    )
}

export default Search