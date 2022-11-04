import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Nav from './components/Nav.js';
import HomePage from './components/HomePage.js';
import ProductsPage from './components/ProductsPage.js';

function App() {
  const [items, setItems] = useState([
    { name: "Lifeblood Heart", price: 250 },
    { name: "Longnail", price: 300 },
    { name: "Quick Focus", price: 800 },
    { name: "Salubra's Blessing", price: 800 },
    { name: "Shaman Stone", price: 220 },
    { name: "Steady Body", price: 120 },
  ]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

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

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].total;
    }
    setTotalPrice(total);
    console.log(cart);
    console.log(totalPrice);
  }, [cart]);

  return (
    <BrowserRouter>
      <div className="container">
        <Nav cart={cart} totalPrice={totalPrice} handleAddItem={handleAddItem} handleRemoveItem={handleRemoveItem} />

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
