import React, { useState } from 'react';
import './index.css'

const ProductCard = ({ product, onAddToCart, onViewProduct }) => {
  const [wishlist, setWishlist] = useState(false);

  return (
    <div className="product-card">
        <div className='product-image'>
            <img src={product.imageUrl} alt={product.name} />
            <button className="wishlist-button" onClick={() => setWishlist(!wishlist)}>
                {wishlist ? '❤️' : '🤍'}
            </button>
            <button className='view-product' onClick={onViewProduct}>View Product</button>
        </div>
        <div className='product-details'> 
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <div className="rating">
                {'⭐'.repeat(Math.floor(5))}
                <p>4.9</p>
            </div>
            <div className='price-cont'>
            <span className='discount'>$359</span>
            <span>${product.price}</span>
            </div>
            
            <div className="actions">
                <button className='addto-cart' onClick={() => onAddToCart(product)}>
                <span>-</span> Add to Cart <span>+</span>
                </button>
                <button className='but-rent'>Buy on Rent</button>
            </div>
      </div>
    </div>
  );
};

export default ProductCard;
