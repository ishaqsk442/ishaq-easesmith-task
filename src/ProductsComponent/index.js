import FilterProducts from '../FilterProducts';
import ProductsList from '../ProductsList';
import './index.css'
import React, { useState } from 'react';


const ProductsComponent = () => {
    const [showFilters, setShowFilters] = useState(false);

  

  return (
    
       <div className="app-container">
        <div className={`filter-side ${showFilters ? 'mobile-show' : 'mobile-hide'}`}>
          <FilterProducts setShowFilters={setShowFilters}/>
        </div>
        <div className="product-side">
            <ProductsList setShowFilters={setShowFilters}/>
        </div>
      </div>
    
  )
}

export default ProductsComponent