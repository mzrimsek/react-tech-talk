import React from 'react';
import logo from '../logo.svg';
import './App.css';
import Content from './Content/Content';

function App() {
  return (
    <div className="App">
      <header>
        <b>Welcome to React!</b>
        <img src={logo} alt="logo" />
      </header>
      <div className="content">
        <Content></Content>
      </div>
    </div>
  );
}

export default App;
