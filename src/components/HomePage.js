import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

function HomePage() {
  return (
    <div className="home-container">
        <div className="home-subcontainer">
          <div className="home-texts-container">
            <h1 className="home-heading">Charms are gorgeous, mystical, one-of-a-kind accessories with a spark of power woven into their cores. Take a look at some of the Charms I have for sale!</h1>
            <p className="home-text">- Charm Lover Salubra</p>
            <Link to="/products" className="shop-link">
              <button className="shop-button" type="button" >Shop Now</button> 
            </Link>
          </div>
          <div className="home-image-container"></div>
        </div>
    </div>
  );
}

export default HomePage;
