import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TbLogin2 } from "react-icons/tb";
import "./Navbar.css"; // Import the CSS file
import { IoSunny } from "react-icons/io5";

const LoginButton = () => {
  return (
    <button className="login">
      Login
      <span className="login-box">
        <TbLogin2 className="login-icon" />
      </span>
    </button>
  );
};

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? "#fff" : "#121212";
    document.body.style.color = darkMode ? "#000" : "#fff";
  };

  useEffect(() => {
    // Set initial background color and text color based on darkMode state
    document.body.style.backgroundColor = darkMode ? "#121212" : "#fff";
    document.body.style.color = darkMode ? "#fff" : "#000";
  }, [darkMode]);

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div>
      {/* Fixed Navbar */}
      <nav className={`navbar ${darkMode ? "dark" : ""}`}>
        <div className="navbar-container">
          {/* Left Section: Logo & Mobile Menu */}
          <div className="navbar-left">
            {/* Mobile Menu Icon */}
            <button className="menu-icon" onClick={toggleDrawer}>
              ☰
            </button>
            {/* Logo */}
            <Link to="/" className="logo">
              <img
                src='/images/logo.png'
                alt="Business Boost Society"
                className="logo-img"
              />
            </Link>
          </div>

          {/* Right Section: Navigation Links + Buttons */}
          <div className={`navbar-right ${mobileOpen ? "open" : ""}`}>
            {/* Desktop Navigation Links */}
            <div className="navbar-links">
              <Link to="/about" className="navbar-link">About Us</Link>
              <Link to="/cohort" className="navbar-link">Cohort</Link>
              <Link to="/accelerator" className="navbar-link">Accelerator</Link>
              <Link to="/contact" className="navbar-link">Contact Us</Link>
            </div>

            {/* Sign Up, Login, Dark Mode Toggle */}
            <Link to="/signup" className="signup-btn">Sign Up</Link>
            <Link to="/login" className="login-btn" style={{textDecoration: "none"}}>
              <LoginButton />
            </Link>
            <button className="dark-mode-toggle" onClick={toggleDarkMode}>
              {darkMode ? (
                <div style={{backgroundColor: "white", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems : "center", padding: "5px"}}><IoSunny color="black" /></div>
              ) : (
                <img src="/images/chand.png" alt="Dark Mode" className="dark-mode-icon" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mobile-drawer">
          {/* Back Arrow to Home */}
          <Link to="/" className="back-arrow" onClick={toggleDrawer}>
            &#8592; {/* Left arrow symbol */}
          </Link>
          <Link to="/about" className="mobile-drawer-item" onClick={toggleDrawer}>
            About Us
          </Link>
          <Link to="/cohort" className="mobile-drawer-item" onClick={toggleDrawer}>
            Cohort
          </Link>
          <Link to="/accelerator" className="mobile-drawer-item" onClick={toggleDrawer}>
            Accelerator
          </Link>
          <Link to="/contact" className="mobile-drawer-item" onClick={toggleDrawer}>
            Contact Us
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
