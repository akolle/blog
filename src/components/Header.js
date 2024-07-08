import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.jpg';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/home-supplies">Home Supplies</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="header-text">
        <h3>Renewed Living</h3>
        <p className="tagline">Embrace a Healthier Future</p> {/* Adding a tagline */}
      </div>
      <img src={logo} alt="Renewed Living Logo" />
      
    </header>
  );
};

export default Header;
