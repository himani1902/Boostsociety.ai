
import React, { useState } from "react";

import "./Footer.css";


const Footer = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsValid(validateEmail(value));
  };

  const handleSubscribe = () => {
    if (isValid) {
      setSubscribed(true);
      setEmail("");
      setIsValid(false);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <input
          type="email"
          placeholder="Enter your email address"
          className="subscribe-input"
          value={email}
          onChange={handleChange}
        />
        <button
          className={`subscribe-button ${isValid ? "valid" : ""}`}
          onClick={handleSubscribe}
          disabled={!isValid}
        >
          Subscribe
        </button>
      </div>

      {/* Middle White Section with Centered Logo */}
      <div className="footer-middle">
        <img src= "images/logo.png" alt="Boost Logo" className="footer-logo" />
        <ul className="footer-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Learning & Lives</a></li>
          <li><a href="#">Monitor & Measure</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>

      {/* Bottom Purple Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 Give Me a Boost | BOOST STRATEGY GROUP™ LLC</p>
        <ul className="footer-bottom-links">
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Cookies Policies</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;