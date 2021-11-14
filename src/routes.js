import React from 'react';
import { Route, withRouter, Switch, useLocation  } from 'react-router-dom'
import HomeScreen from './pages/home/home'
import Bantuan from './pages/bantuan/bantuan'
import Category from './pages/category'
import About from './pages/about/about'
import bookSummary from './pages/bookSummary/bookSummary'
import Read from './pages/read/read'
import Write from './pages/write/write'
import Navbar from './components/navbar/navbar'


function Routes() {
  const location = useLocation();
  const pathNoNavbar = ['/Write', '/Read']
  console.log('location : ', location)
  return (
    <div> 
        {pathNoNavbar.includes(location.pathname) ? null : <Navbar />}       
        {/* <Navbar/> */}
        <Route exact path='/' component={HomeScreen} />
        <Route exact path='/bantuan' component={Bantuan} />
        <Route exact path='/kategori' component={Category} />
        <Route exact path='/tentang-kami' component={About} />
        <Route path='/summary' component={bookSummary} />
        <Route path='/Read' component={Read} />
        <Route path='/Write' component={Write} />
    </div>
  );
}

export default Routes;


// function Routes() {
//   const location = useLocation();
//   return (
//     <>
//       <Route exact path="/(write)" component={LoginContainer}/>
//       <Route component={DefaultContainer}/>
//     </>
//   );
// }

// const LoginContainer = () => (
//   <div>
//     <Route path='/Write' component={Write} /> 
//   </div>
// )


// const DefaultContainer = () => (
//   <div>
//       {location.pathname === '/' ? null : <Navbar />}
//       <Route exact path='/' component={HomeScreen} />
//       <Route exact path='/bantuan' component={Bantuan} />
//       <Route exact path='/kategori' component={Category} />
//       <Route exact path='/tentang-kami' component={About} />
//       <Route path='/summary' component={bookSummary} />
//       <Route path='/Read' component={Read} />
//   </div>
// )

// export default Routes;