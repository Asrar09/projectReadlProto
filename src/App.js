import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Routes from './routes'

function App() {
  return (
    <Router>
      <Switch>
      <div className="app">
        <Routes />
      </div>
      </Switch>
    </Router>
  );
}

export default App;
