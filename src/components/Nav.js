import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

function Nav({ totalItems, handleOpenCartDisplay }) {
    let bubbleClass = "notify-bubble";
    if (totalItems > 0) {
        bubbleClass += " bubble-active";
    }

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
                <div className="notify-container">
                    <div className={bubbleClass}>{totalItems}</div>
                    <li onClick={() => handleOpenCartDisplay()}>Cart</li>
                </div>
            </ul>
        </nav>
    );
}

export default Nav;
