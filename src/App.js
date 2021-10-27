import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar/navbar'
import Routes from './routes'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar/>
        <Routes />
      </div>
    </Router>
  );
}

export default App;
