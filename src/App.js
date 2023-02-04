import React, { useState, useEffect } from 'react';
import { Routes, Route, HashRouter } from "react-router-dom";
import './App.css';
import Nav from './components/Nav.js';
import HomePage from './components/HomePage.js';
import ProductsPage from './components/ProductsPage.js';
import ShoppingCart from './components/ShoppingCart.js';

function App() {
  const [items, setItems] = useState([
    { name: "Gathering Swarm", price: 300 },
    { name: "Heavy Blow", price: 350 },
    { name: "Lifeblood Heart", price: 250 },
    { name: "Longnail", price: 300 },
    { name: "Quick Focus", price: 800 },
    { name: "Salubra's Blessing", price: 800 },
    { name: "Shaman Stone", price: 220 },
    { name: "Steady Body", price: 120 },
  ]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [cartDisplay, setCartDisplay] = useState(false);

  function handleAddItem(item, price, quantity = 1) {
    let updated = cart.slice();
    let inCart = false;

    for (let i = 0; i < updated.length; i++) {
      if (updated[i].name === item) {
        updated[i].quantity += quantity;
        updated[i].total += price;
        inCart = true;
      }
    }
    
    if (!inCart) {
      updated.push({ name: item, quantity: quantity, total: price });
    }

    setCart(updated);
  }

  function handleRemoveItem(item, price) {
    let updated = cart.slice();

    for (let i = 0; i < updated.length; i++) {
      if (updated[i].name === item) {
        if (updated[i].quantity > 1) {
          updated[i].quantity -= 1;
          updated[i].total -= price;
        } else if (updated[i].quantity <= 1) {
          updated.splice(i, 1);
        }
      }
    }

    setCart(updated);
  }

  function handleOpenCartDisplay() {
    setCartDisplay(true);
  }

  function handleCloseCartDisplay() {
    setCartDisplay(false);
  }

  useEffect(() => {
    let updatedTotalPrice = 0;
    let updatedTotalItems = 0;
    
    for (let i = 0; i < cart.length; i++) {
      updatedTotalPrice += cart[i].total;
      updatedTotalItems += cart[i].quantity;
    }
    setTotalPrice(updatedTotalPrice);
    setTotalItems(updatedTotalItems);
  }, [cart]);

  return (
    <HashRouter>
      <div className="container">
        <Nav 
        totalItems={totalItems}
        handleOpenCartDisplay={handleOpenCartDisplay} 
        />

        <ShoppingCart
        cart={cart}
        totalPrice={totalPrice}
        cartDisplay={cartDisplay}
        handleAddItem={handleAddItem}
        handleRemoveItem={handleRemoveItem}
        handleCloseCartDisplay={handleCloseCartDisplay}
        />

        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage items={items} handleAddItem={handleAddItem} />} />
          </Routes>
        </div>

        <div className="footer">
          <a href="https://github.com/mraffia">
            <strong>mraffia</strong>
            &nbsp;
            <svg aria-hidden="true" className="octicon octicon-mark-github" height="16" width="16" version="1.1" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
            </svg> 
          </a>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
