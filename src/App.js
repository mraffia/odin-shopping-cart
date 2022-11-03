import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Nav from './components/Nav.js';
import HomePage from './components/HomePage.js';
import ProductsPage from './components/ProductsPage.js';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Nav />

        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
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
