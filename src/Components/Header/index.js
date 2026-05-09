import React, { useState } from "react";
import { FiUser, FiShoppingCart, FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import SearchBox from "./SearchBox/Index"; // Corrected import
import "./Header.css";
const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };


  return (
    <div className="headerWrapper">
      {/* Top Notification Strip */}
      <div className="top-strip">
        <p>FREE US SHIPPING ON ALL ORDERS</p>
      </div>

      {/* Navigation Bar */}
      <nav className="navbar">
        <button className="hamburger-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className="logo">
          <h3>aura & hour</h3>
        </div>

        <div className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
          <div className="mobile-search">
            <SearchBox />
          </div>

          {/* Center Menu Items */}
          <div className="menu-items">
            <div className="dropdown">
              <button className="dropbtn" onClick={() => toggleDropdown("watches")}>
                Watches <FiChevronDown className="dropdown-icon" />
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
                Sunglasses <FiChevronDown className="dropdown-icon" />
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

        </div>

        {/* Right Icon Section */}
        <div className="icons">
          <div className="desktop-search">
            <SearchBox />
          </div>

          <div className="icon-btn acc">
            <FiUser /> {/* Account Icon */}
            <div className="icon-text">
              <a href="/account">Account</a>
            </div>
          </div>

          {/* Cart Icon Section */}
          <div className="icon-btn cart" style={{ position: "relative" }}>
            <FiShoppingCart className="cart-icon" />
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
