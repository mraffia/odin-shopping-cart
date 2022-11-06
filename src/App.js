import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    <BrowserRouter>
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
          By yours truly,&nbsp;<a href="https://github.com/mraffia"> <strong>mraffia</strong></a>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
