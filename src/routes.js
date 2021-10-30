import React from 'react';
import { Route } from 'react-router-dom'
import HomeScreen from './pages/home/home'
import Bantuan from './pages/bantuan/bantuan'
import Category from './pages/category'
import About from './pages/about/about'
import bookSummary from './pages/bookSummary/bookSummary'
import Read from './pages/read/read'

function Routes() {
  return (
    <>
        <Route exact path='/' component={HomeScreen} />
        <Route exact path='/bantuan' component={Bantuan} />
        <Route exact path='/kategori' component={Category} />
        <Route exact path='/tentang-kami' component={About} />
        <Route path='/summary' component={bookSummary} />
        <Route path='/Read' component={Read} />
    </>
  );
}

export default Routes;
