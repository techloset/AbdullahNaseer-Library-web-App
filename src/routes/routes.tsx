import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookDetails from '../pages/BookDetails';
import Home from '../pages/Home';

const routes = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bookdetails" element={<BookDetails />} />
    </Routes>
  </BrowserRouter>
);

export default routes;
