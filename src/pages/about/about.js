import React, { useState } from 'react';
import './about.css'


function About() {

    const onClickBeranda = () => {
        console.log('Beranda')
    }
    return (
        <div class="about-container">
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
