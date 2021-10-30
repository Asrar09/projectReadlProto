import React, { useState } from 'react'
import './bantuan.css'

function Bantuan() {

    const [navClick, setNavClick] = useState(false);

    const onClickBeranda = () => {
        console.log('Beranda')
    }
    return (
        <div class="bantuan-container">
            <h1>Bantuan</h1>
        </div>
    )
}


export default Bantuan
