import React, { useState } from 'react';
import ProductCard from '../ProductCard';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter} from '@fortawesome/free-solid-svg-icons';
import './index.css';
import  product1 from '../Assets/product1.png'
import  product2 from '../Assets/product2.png'
import  product3 from '../Assets/product3.png'

const ProductsList = ({ setShowFilters }) => {
//   const [sortBy, setSortBy] = useState('size');
  const [openFilters, setOpenFilters] = useState(false);
  const [products] = useState([
    // Sample product data
    { id: 1, name: 'Monsterra', description: 'Indoor plants, low maintenance', rating: 4.9, price: 299,imageUrl: product1},
    { id: 2, name: 'Monsterra', description: 'Indoor plants, low maintenance', rating: 4.9, price: 299 ,imageUrl: product2},
    { id: 3, name: 'Monsterra', description: 'Indoor plants, low maintenance', rating: 4.9, price: 299 ,imageUrl: product3},
    { id: 4, name: 'Monsterra', description: 'Indoor plants, low maintenance', rating: 4.9, price: 299,imageUrl: product1},
    { id: 5, name: 'Monsterra', description: 'Indoor plants, low maintenance', rating: 4.9, price: 299 ,imageUrl: product2},
    { id: 6, name: 'Monsterra', description: 'Indoor plants, low maintenance', rating: 4.9, price: 299 ,imageUrl: product3},
    { id: 7, name: 'Monsterra', description: 'Indoor plants, low maintenance', rating: 4.9, price: 299,imageUrl: product1},
    { id: 8, name: 'Monsterra', description: 'Indoor plants, low maintenance', rating: 4.9, price: 299 ,imageUrl: product2},
    { id: 9, name: 'Monsterra', description: 'Indoor plants, low maintenance', rating: 4.9, price: 299 ,imageUrl: product3},
    
  ]);
  const options = ['Size' , 'Popularity' , 'Price,Low- High', 'Price,High- Low']

  const navigate = useNavigate();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAddToCartModal, setShowAddToCartModal] = useState(false);
  const [showOrderPlacedModal, setShowOrderPlacedModal] = useState(false);

  const toggleFilter = () => {
    setOpenFilters(!openFilters)
  };

  const handleViewProduct = () => {
    navigate('/thank-you');
  };

  


  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setShowAddToCartModal(true); // Open the first modal
  };

  const handleConfirmAddToCart = () => {
    setShowAddToCartModal(false); // Close first modal
    setShowOrderPlacedModal(true); // Open second modal
  };

  const handleContinueShopping = () => {
    setShowOrderPlacedModal(false);
    navigate('/'); // Navigate to home page
  };

  return (
    <div className="products-list-container">
      <div className="products-header">
        <p>Total Products: {products.length}</p>
        <div className='sort-by-cont'>
            <div className='sort-by'>
            <p>SORT BY</p>
            <button onClick={() => toggleFilter()}>
                {openFilters ? '▲' : '▼'}
            </button>
            </div>
            
            {openFilters && (
            <div className="sortby-menu">
              {options.map((each) => (
                <div className='sort-option'>
                    <input type='checkbox'/>
                    <p>{each}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Hamburger icon to toggle the filters on mobile */}
        <button className="hamburger-icon" onClick={() => setShowFilters(true)}>
        <FontAwesomeIcon icon={faFilter} />
        

        </button>
      </div>
      <div className="products-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
            onViewProduct={handleViewProduct}
          />
        ))}
      </div>


      {/* Add to Cart Confirmation Modal */}
      {showAddToCartModal && selectedProduct && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-modal" onClick={() => setShowAddToCartModal(false)}>X</button>
            <h3>Confirm Add to Cart</h3>
            <p>Do you want to add <strong>{selectedProduct.name}</strong> to your cart for ₹{selectedProduct.price}?</p>
            <div className="modal-buttons">
              <button onClick={handleConfirmAddToCart}>Yes</button>
              <button onClick={() => setShowAddToCartModal(false)}>No</button>
            </div>
          </div>
        </div>
      )}

      {/* Order Placed Modal */}
      {showOrderPlacedModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-modal" onClick={() => setShowOrderPlacedModal(false)}>X</button>
            <h2>Your Cart</h2>
            <hr />
            <h3>Congratulations, Order Placed!</h3>
            <img src={product1} alt="Order Placed" className="plant-image" />
            <p>Thank you for choosing Chaperone services. We will soon get in touch with you!</p>
            <button onClick={handleContinueShopping}>Continue Shopping</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default ProductsList;
