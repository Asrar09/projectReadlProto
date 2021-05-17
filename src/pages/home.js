import React, { useState } from 'react';
import Section from '../components/Section'
import {homeScreenBookData, moreData} from '../const/homeScreenData'
import promo from '../assets/img/promo.png'


function HomeScreen() {

    const onClickBeranda = () => {
        console.log('Beranda')
    }
    return (
        <div style={{ margin: '20px', paddingBottom: '50px'}}>
            <img src={promo} alt="promoImage" style={{
                borderRadius: '20px',
                height:'auto',
                maxWidth: '100%',
                marginLeft: 'auto',
                marginRight: 'auto',
                display: 'block',
            }}/>
            <div style={{
                display: 'block',
                backgroundImage: `url(${promo})`,
                backgroundSize: 'cover',
                borderRadius: '20px',
                height:'auto',
                maxWidth: '100%',
            }} />
            <Section title="Rekomendasi" data={moreData}/>
            <Section title="Cerita Riddle" data={moreData}/>
            <Section title="Terpopuler Minggu Ini" data={homeScreenBookData}/>
        </div>
    )
}


export default HomeScreen
