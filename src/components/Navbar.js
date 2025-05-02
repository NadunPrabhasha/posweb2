import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/styles/Navbar.css';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear login state if needed
    navigate("/SignUp");
  };

  return (
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src={logo} alt="POS System Logo" className="logo-img" />
            <span className='logo-name'>REAL TECH</span>
          </div>
          <ul className="navbar-links">
            <li><Link to="/dashboard">Home</Link></li>
            <li><Link to="/customers">Customers</Link></li>
            <li><Link to="/orders">Orders</Link></li>
            <li><Link to="/supply-management">Supplier</Link></li>
            <li><Link to="/Items">Items</Link></li>
          </ul>
          <div className="navbar-buttons">

            <button className="navbar-btn" onClick={handleLogout}>Log Out</button>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;