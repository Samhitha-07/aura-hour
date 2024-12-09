import React, { useState } from "react";
import { FaUser, FaShoppingCart, FaChevronDown } from "react-icons/fa";
import SearchBox from "./SearchBox/Index"; // Corrected import

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [cartCount, setCartCount] = useState(0); // State for cart item count

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const addToCart = () => {
    setCartCount(cartCount + 1); // Increment cart count when called
  };

  return (
    <div className="headerWrapper">
      {/* Top Notification Strip */}
      <div className="top-strip bg-cream">
        <p className="mb-0 mt-0 text-center">FREE US SHIPPING ON ALL ORDERS</p>
      </div>

      {/* Navigation Bar */}
      <nav className="navbar">
        {/* Center Menu Items */}
        <div className="menu-items">
          <div className="dropdown">
            <button className="dropbtn" onClick={() => toggleDropdown("watches")}>
              Watches <FaChevronDown className="dropdown-icon" />
            </button>
            {openDropdown === "watches" && (
              <div className="dropdown-content">
                <a href="/watchmen">Men's Watches</a>
                <a href="/watchwomen">Women's Watches</a>
              </div>
            )}
          </div>
          <div className="dropdown">
            <button className="dropbtn" onClick={() => toggleDropdown("sunglasses")}>
              Sunglasses <FaChevronDown className="dropdown-icon" />
            </button>
            {openDropdown === "sunglasses" && (
              <div className="dropdown-content">
                <a href="/sunglassmen">Men's Sunglasses</a>
                <a href="/sunglasswomen">Women's Sunglasses</a>
              </div>
            )}
          </div>
          <div className="dropdown">
            <div className="dropbtn">
                <a href="/explore">Explore</a>
            </div>
          </div>
        </div>
        <div className="logo">
          <h3>aura & hour</h3>
        </div>
        {/* Right Icon Section */}
        <div className="icons">
          <SearchBox /> {/* Using SearchBox component here */}
          
          <div className="icon-btn acc">
            <FaUser /> {/* Account Icon */}
            <div className="icon-text">
                <a href="/account">Account</a>
            </div>
          </div>

          {/* Cart Icon Section */}
          <div className="icon-btn cart" onClick={addToCart} style={{ position: "relative" }}>
            <FaShoppingCart className="cart-icon" />
            {cartCount > 0 && (
              <span className="cart-count">{cartCount}</span>
            )}
            <div className="icon-text">
                <a href="/cart" >Cart</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
