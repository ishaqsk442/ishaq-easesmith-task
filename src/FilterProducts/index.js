import React, { useState } from 'react';
import './index.css'

const FilterProducts = ({ setShowFilters }) => {
  const [openFilters, setOpenFilters] = useState({});

  const toggleFilter = (filterName) => {
    setOpenFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

  const filters = [
    'Type of Plants', 'Price', 'Nursery', 'Ideal Plants Location', 
    'Indoor/ Outdoor', 'Maintenance', 'Plant Size', 'Water Schedule', 
    'Color', 'Seasonal', 'Light Efficient'
  ];

  const options = [
    'Lorem Ipsum (12)' , 'Lorem Ipsum (23)','Lorem Ipsum (41)','Lorem Ipsum (9)','Lorem Ipsum (15)','Lorem Ipsum (41)','Lorem Ipsum (9)'
  ]

  return (
    <div className="filter-container">
        <button className="close-icon" onClick={() => setShowFilters(false)}>
        ✕
      </button>
      <div className="filter-header">
        <p>Filter</p>
        <button>CLEAR ALL</button>
      </div>
      {filters.map((filter) => (
        <div key={filter} className="filter-item">
            <div className='filter-name'>
                <p>{filter}</p>
                {filter==="Type of Plants" || filter==="Indoor/ Outdoor"  ? 
                <button onClick={() => toggleFilter(filter)}>
                    {openFilters[filter] ? '▲' : '＋'}
                </button>: '+'}
            </div>
          {openFilters[filter] && (
            <div className="filter-options">
              {options.map((each) => (
                <div className='option-item'>
                    <input type='checkbox'/>
                    <p>{each}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FilterProducts;
