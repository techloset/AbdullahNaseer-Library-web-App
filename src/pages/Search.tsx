import SearchGrid from '../components/SearchGrid';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Search: React.FC = () => {
  return (
    <div className='mx-6 lg:mx-36'>
      <Navbar />
      <SearchGrid />
      <Footer />
    </div>
  );
};

export default Search;
