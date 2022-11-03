import React from 'react';
import './App.css';
import Nav from './components/Nav.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Nav />

      <div className="content">
      </div>

      <div className="footer">
        By yours truly,&nbsp;<a href="https://github.com/mraffia"> <strong>mraffia</strong></a>
      </div>
    </div>
  );
}

export default App;
