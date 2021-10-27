import React, { useState, useEffect } from 'react';
import { MenuItems } from './menuItem'
import header_logo from '../../assets/img/header_logo.png'
import SearchBar from '../SearchBar'
import notification from '../../assets/img/notification.png'
import profilesample from '../../assets/img/profilesample.png'
import './navbar.css'
import Category from '../category/category';

function Navbar({ title }) {

    const [navClick, setNavClick] = useState(false);
    const [categoryClick, setCategoryClick] = useState(false);
    const [navListClick, setNavCLicked] = useState('Beranda');

    useEffect(() => {
        // Update the document title using the browser API
        console.log(`current navClick ${navClick}`)
    });



    return (
        <nav className="NavbarItems">
            {categoryClick && <Category />}
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <img src={header_logo} alt="headerLogo" className="navbar-logo"/>
                {/* <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1> */}
                <div className="menu-icon" onClick={() => setNavClick(!navClick)}>
                    <i className={navClick ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <div className='invisble-div' />
                <ul className={navClick ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        if(item.title === 'Kategori'){
                            return(
                            <li>
                                <div onClick={() => {setCategoryClick(!categoryClick)}} className={item.cName} href={item.url}>{item.title}</div>
                            </li>
                            )
                        }
                        return(
                            <li>
                                <a onClick={() => {setNavCLicked(item.cName)}} className={item.cName} href={item.url}>{item.title}</a>
                            </li>
                        )
                    })
                    }
                    <div className='menu-search-icon'>
                        <SearchBar />
                        <img src={notification} alt="notification" style={{
                            marginRight: '15px',
                            height: '26px',
                            width: '26px',
                        }}/>
                        <div style={{
                            backgroundImage: `url(${profilesample})`,
                            borderRadius: 100,
                            height: '30px',
                            width:'30px',
                            borderWidth: '2px',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            }}>
                        </div>
                    </div>
                </ul>
            </div>
            <div className='search-icon'>
                <SearchBar />
                <img src={notification} alt="notification" style={{
                    marginRight: '15px',
                    height: '26px',
                    width: '26px',
                }}/>
                <div style={{
                    backgroundImage: `url(${profilesample})`,
                    borderRadius: 100,
                    height: '30px',
                    width:'30px',
                    borderWidth: '2px',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    }}>
                </div>
            </div>
        </nav>
    )
}

export default Navbar