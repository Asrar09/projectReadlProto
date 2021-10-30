import React, { useState } from 'react';
import Book from '../../components/Book/Book'
import Button from '../../components/button/Button'
import author1 from '../../assets/img/author_1.jpg'
import book1 from '../../assets/img/book1.png'
import {bookData1} from '../../const/bookSummaryData'
import './bookSummary.css'
import '../../Common.css'


function bookSummary() {

    console.log('TES')
    const onClickBeranda = () => {
        console.log('Beranda')
    }
    const bookData = {
        id: 1,
        title: 'I Think I Love You',
        author: 'Dhia Amjad',
        authorImg: author1,
        summary: `Aku memasuki kamarku yang masih bernuansa gelap, biasanya mama membangunkanku dengan membuka tirai jendela kamar dan membiarkan cahaya matahari menyilaukan pandanganku agar aku terbangun. Tapi jujur saja, aku lebih suka suasana kamar seperti ini dimana aku bisa menyalakan lampu tumblr yang menghiasi kamar dengan gemerlapnya. Aku duduk mengambil posisi nyaman, menyalakan laptop, menyuap sereal, dan memutar lagunya Powfu.
    
        Kubuka pesan dari teman onlineku yang bernama Miggie itu. Rupanya dia menyarankanku untuk mengunjungi sebuah situs forum yang sedang populer, katanya cukup ramai penulis freelance mempromosikan tulisannya disana. Okay, menurutku tidak ada salahnya aku mencoba, aku langsung menekan link yang dicantumkan. Terhubunglah aku dengan situs tersebut yang bernama “COCOA”, sebuah web forum dengan banyak ragam thread. `,
        likeCount: '100',
        viewCount: '200',
        bookmarkCount: '100',
        bookImage: book1,
    }

    const textData = "Aku memasuki kamarku yang masih bernuansa gelap, biasanya mama membangunkanku dengan membuka tirai jendela kamar dan membiarkan cahaya matahari menyilaukan pandanganku agar aku terbangun. Tapi jujur saja, aku lebih suka suasana kamar seperti ini dimana aku bisa menyalakan lampu tumblr yang menghiasi kamar dengan gemerlapnya. Aku duduk mengambil posisi nyaman, menyalakan laptop, menyuap sereal, dan memutar lagunya Powfu. Kubuka pesan dari teman onlineku yang bernama Miggie itu. Rupanya dia menyarankanku untuk mengunjungi sebuah situs forum yang sedang populer, katanya cukup ramai penulis freelance mempromosikan tulisannya disana. Okay, menurutku tidak ada salahnya aku mencoba, aku langsung menekan link yang dicantumkan. Terhubunglah aku dengan situs tersebut yang bernama “COCOA”, sebuah web forum dengan banyak ragam thread."

    return (
        <div class="book-summary-container">
            <div style={{
                display: 'flex',
                marginBottom: '30px',
                justifyContent: 'center',
                alignContent: 'center',
            }}>
                {/* <Book props={bookData1}/> */}
                <div style={{display: 'flex'}}>
                     <Book props={bookData1}/>
                </div>
            </div>
            <div class="book-summary-text-container">
                <p class='readingTextStyle book-summary-text'>
                 {textData}
                </p>
            </div>
            <center><a href={`/read/12`} class="book-summary-mulai-button">
                <Button text={'Mulai Membaca'} />
            </a></center>
        </div>
    )
}


export default bookSummary
