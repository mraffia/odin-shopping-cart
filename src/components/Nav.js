import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

function Nav() {
  return (
    <nav className="navbar">
        <Link to="/" className="nav-title-link">
            <div className="nav-title">Odin Shopping Cart</div>
        </Link>
        <ul className="nav-links">
            <Link to="/" className="nav-link">
                <li>Home</li>
            </Link>
            <Link to="/products" className="nav-link">
                <li>Products</li>
            </Link>
            <li>Cart</li>
        </ul>
    </nav>
  );
}

export default Nav;
