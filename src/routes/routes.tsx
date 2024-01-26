import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookDetails from '../pages/BookDetails';
import Home from '../pages/Home';
import Search from '../pages/Search';

const routes = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bookdetails/:id" element={<BookDetails />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  </BrowserRouter>
);

export default routes;
