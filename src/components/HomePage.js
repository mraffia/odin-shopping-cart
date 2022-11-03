import React from 'react';
import '../styles/HomePage.css';
import Salubra from '../images/salubra.png';

function HomePage() {
  return (
    <div className="home-container">
        <div className="home-subcontainer">
          <div className="home-texts-container">
            <h1 className="home-heading">I can see you've started your own collection. Very nice! I'll show you some of my own, and you can take one home with you if you like!</h1>
            <p className="home-text">- Charm Lover Salubra</p>
            <button className="shop-button">Shop Now</button>
          </div>
          <div className="home-image-container">
            <img className="home-image" src={Salubra} alt="Salubra" />
          </div>
        </div>
    </div>
  );
}

export default HomePage;
