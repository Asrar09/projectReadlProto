import React, { useState } from 'react';
import Section from '../components/section/Section'
import {homeScreenBookData, moreData} from '../const/homeScreenData'
import promo from '../assets/img/promo.png'


function HomeScreen() {

    const onClickBeranda = () => {
        console.log('Beranda')
    }
    return (
        <div style={{ flexDirection: 'column', paddingBottom: '50px', maxWidth: '1300px', marginRight: '30px', marginLeft: '30px'}}>
            <div style={{
                overflow: 'hidden',
                borderRadius: '20px',
                margin: '10px'
                }}>
                <img src={promo} alt="promoImage" style={{
                    display: 'block',
                    width: '100%',
                    maxWidth: '100%',
                    height: 'auto',
                    maxHeight: '100%',
                    objectFit: 'cover'
                }}/>
            </div>
            <Section title="Rekomendasi" data={homeScreenBookData}/>
            <Section title="Cerita Riddle" data={moreData}/>
            <Section title="Terpopuler Minggu Ini" data={homeScreenBookData}/>
        </div>
    )
}


export default HomeScreen
