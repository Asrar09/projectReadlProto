import React, { useState } from 'react';
import promo from '../assets/img/promo.png'
import book1 from '../assets/img/book1.png'
import book2 from '../assets/img/book2.png'
import book3 from '../assets/img/book3.png'
import book4 from '../assets/img/book4.png'
import book5 from '../assets/img/book5.png'
import Navbar from '../components/navbar/navbar'

function Read() {

    const [navClick, setNavClick] = useState(false);

    const onClickBeranda = () => {
        console.log('Beranda')
    }
    return (
        <div>
            <h4>BANTUAN</h4>
        </div>
    )
}


export default Read
