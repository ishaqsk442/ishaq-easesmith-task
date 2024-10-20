import React, { useState } from 'react';
import './index.css'; // Add your styles
import { FaSearch } from 'react-icons/fa'; // Font Awesome search icon
// import searchlogo from '../Assets/searchlogo.png'

const SearchProduct = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle search input
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term); // Pass the search term to the parent component
  };

  return (
    <div className="search-product">
      <div className="search-bar">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearch}
          />
          {/* <img src={searchlogo} alt="Logo" className="logo" /> */}
          <img src='/Assets/searchlogo.png' alt="Logo" className="logo" />
        </div>
      </div>
    </div>
  );
};

export default SearchProduct;
