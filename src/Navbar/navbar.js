import React, { useState } from 'react';
import { FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'; // Icons for user, cart, hamburger
import './navbar.css'; // Include your styles
const logo = 'https://res.cloudinary.com/dpetyh8cc/image/upload/v1729486229/logo_nkb6bp.png';

const Navbar = ({ cartItemsCount }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isToolsDropdownOpen, setIsToolsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleToolsDropdownToggle = () => {
    setIsToolsDropdownOpen(!isToolsDropdownOpen);
  };

  const handleServicesDropdownToggle = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  return (
    <header className="navbar">
      {/* Desktop Navbar */}
      <div className="navbar-container">
        <div className="brand">
          <img src={logo} alt="Brand Logo" className="brand-logo" />
          <h1 className="brand-title">Chaperone</h1>
        </div>

        <nav className="menu-items">
          <ul>
            <li>Home</li>
            <li>Plants & Pots</li>

            {/* Tools Dropdown */}
            <li className="dropdown" onClick={handleToolsDropdownToggle}>
              Tools &#11206;
              {isToolsDropdownOpen && (
                <ul className="dropdown-menu">
                  <li>Gardening Tools</li>
                  <li>Pest Control</li>
                  <li>Fertilizers</li>
                  <li>Water Cans</li>
                </ul>
              )}
            </li>

            {/* Our Services Dropdown */}
            <li className="dropdown" onClick={handleServicesDropdownToggle}>
              Our Services &#11206;
              {isServicesDropdownOpen && (
                <ul className="dropdown-menu">
                  <li>Book a Maali</li>
                  <li>Plant Day Care</li>
                  <li>Rent Plant Items</li>
                </ul>
              )}
            </li>

            <li>Blog</li>
            <li>Our Story</li>
            <li>FAQs</li>
          </ul>
        </nav>

        {/* Profile and Cart */}
        <div className="user-cart-icons">
          <div className="profile">
            <FaUser />
            <span>My Profile</span>
          </div>
          <div className="cart">
            <FaShoppingCart />
            <span>Cart</span>
            {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="mobile-navbar">
        <FaBars className="hamburger-icon" onClick={handleMobileMenuToggle} />
        <div className="mobile-brand">
          <h1 className="brand-title">Chaperone</h1>
        </div>
        <div className="mobile-icons">
          <FaUser />
          <FaShoppingCart />
          {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <FaTimes className="close-icon" onClick={handleMobileMenuToggle} />

          <ul>
            <li>Home</li>
            <li>Plants & Pots</li>

            {/* Mobile Tools Dropdown */}
            <li className="dropdown" onClick={handleToolsDropdownToggle}>
              Tools &#11206;
              {isToolsDropdownOpen && (
                <ul>
                  <li>Gardening Tools</li>
                  <li>Pest Control</li>
                  <li>Fertilizers</li>
                  <li>Water Cans</li>
                </ul>
              )}
            </li>

            {/* Mobile Our Services Dropdown */}
            <li className="dropdown" onClick={handleServicesDropdownToggle}>
              Our Services &#11206;
              {isServicesDropdownOpen && (
                <ul>
                  <li>Book a Maali</li>
                  <li>Plant Day Care</li>
                  <li>Rent Plant Items</li>
                </ul>
              )}
            </li>

            <li>Blog</li>
            <li>Our Story</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
