import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './pages/home'
import Read from './pages/read'
import Category from './pages/category'
import About from './pages/about'
import Navbar from './components/navbar/navbar'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar/>
        <Route exact path='/' component={HomeScreen} />
        <Route exact path='/bantuan' component={Read} />
        <Route exact path='/kategori' component={Category} />
        <Route exact path='/tentang-kami' component={About} />
      </div>
    </Router>
  );
}

export default App;
