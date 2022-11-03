import React from 'react';
import '../styles/Nav.css';

function Nav() {
  return (
    <nav className="navbar">
        <div className="nav-title">Odin Shopping Cart</div>
        <ul className="nav-links">
            <li>Home</li>
            <li>Products</li>
            <li>Cart</li>
        </ul>
    </nav>
  );
}

export default Nav;
