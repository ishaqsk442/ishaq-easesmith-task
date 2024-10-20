import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/navbar';
import Home from './Home'
import SearchProduct from './SearchProducts';
import ProductsSummery from './ProductsSummery';
import NurserySplideProducts from './NurserySplideProducts'
import ThankYouPage from './ThankYouPage';





function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}

// function App() {
//   return (
//     <div className='App'>
      
//       <Navbar/>
//       <SearchProduct/>
//       <ProductsSummery/>
//       <NurserySplideProducts/>
//     </div>
//   );
// }

export default App;
