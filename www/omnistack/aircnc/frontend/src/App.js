import React from 'react';
import './App.css';

import logo from './assets/logo.svg';

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={logo} alt="Logo AirCnC"/>
        <div className="content-box">
          <p>Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para a sua empresa</p>
          <form>
            <label htmlFor="email">E-MAIL *</label>
            <input
              type="email"
              name="email" 
              id="email" 
              placeholder="Seu melhor email"/>

          </form>
        </div>
      </div>
    
    </div>
  );
}

export default App;
