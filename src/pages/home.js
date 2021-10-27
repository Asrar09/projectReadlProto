import React, { useState } from 'react';
import Section from '../components/section/Section'
import {homeScreenBookData, moreData} from '../const/homeScreenData'
import promo from '../assets/img/promo.png'


function HomeScreen() {

    const onClickBeranda = () => {
        console.log('Beranda')
    }
    return (
        <div style={{ paddingBottom: '50px', justifyContent: 'center', maxWidth: '1300px', marginRight: '25px', marginLeft: '25px'}}>
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
