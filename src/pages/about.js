import React, { useState } from 'react';
import promo from '../assets/img/promo.png'
import book1 from '../assets/img/book1.png'
import book2 from '../assets/img/book2.png'
import book3 from '../assets/img/book3.png'
import book4 from '../assets/img/book4.png'
import book5 from '../assets/img/book5.png'


function About() {

    const onClickBeranda = () => {
        console.log('Beranda')
    }
    return (
        <div style={{ margin: '20px', paddingBottom: '50px'}}>
            <h1>Tentang Kami</h1>
            <p>
            Riddle adalah platform untuk cerita-cerita bermain peran yang berpengalaman. Kami membawa cerita untuk Anda yang bisa Anda mainkan.

            Teka-teki ini dibuat oleh orang yang mungkin tidak tahu di sisi lain planet ini. Seseorang yang selalu merasa bosan dalam rutinitas hariannya. Asal tahu saja, dia harap Anda menikmati The Riddle.

            Jangan keberatan untuk memberikan pendapat, saran, kritik, atau apa pun untuk menjadikan Riddle ini lebih baik;)
            </p>
        </div>
    )
}


export default About
