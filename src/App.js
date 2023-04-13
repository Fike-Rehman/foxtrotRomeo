import React from 'react';
// import logo from './logo.svg';
import mylogo from './mylogo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mylogo} className="App-logo" alt="logo" />
        <p>
          Welcome to Foxtrot Romeo!
        </p>
      </header>
    </div>
  );
}

export default App;
