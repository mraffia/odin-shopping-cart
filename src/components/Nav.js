import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';
import CartLogo from '../images/cart.svg';

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
                <li className="nav-link notify-container" onClick={() => handleOpenCartDisplay()} data-testid="nav-cart">
                    <span className={bubbleClass} data-testid="notify-bubble">{totalItems}</span>
                    <img className="cart-logo" src={CartLogo} alt="Cart" />
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
