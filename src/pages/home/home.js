import React, { useState } from 'react';
import Section from '../../components/section/Section'
import {homeScreenBookData, moreData} from '../../const/homeScreenData'
import promo from '../../assets/img/promo.png'
import './home.css'


function HomeScreen() {

    const onClickBeranda = () => {
        console.log('Beranda')
    }
    return (
        <div class="home-container">
            <div class="home-image-container">
                <img class="home-image" src={promo} alt="promoImage"/>
            </div>
            <Section title="Rekomendasi" data={homeScreenBookData}/>
            <Section title="Cerita Riddle" data={moreData}/>
            <Section title="Terpopuler Minggu Ini" data={homeScreenBookData}/>
        </div>
    )
}


export default HomeScreen
