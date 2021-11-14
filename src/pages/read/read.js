import React, { useState } from 'react';
import Button from '../../components/button/Button'


function Read() {

    console.log('TES')
    const onClickBeranda = () => {
        console.log('Beranda')
    }
    const bookData = {
        bookTitle: 'The Dating App',
        chapterTitle: 'Cereal',
        bookId: 123,
        authorId: 456,
        page: 1,
        button: [{
            id: 1,
            order: 1,
            nextPage: 2,
            desc: 'Lanjutkan'
        }],
        content:[{
            id: 1,
            order: 1,
            type: 'text',
            desc: 'Pagi ini terasa seperti pagi di hari sebelumnya. Membosankan. Kamu belum tahu ingin melakukan apa saja hari ini. Rumah terasa sepi. Kedua orangtuamu sedang pergi keluar kota dan meninggalkanmu di rumah ini sendiri sejak lima hari yang lalu. Untuk melihat prospek bisnis, kata mereka. Mereka memang selalu antusias setiap mendengar ada peluang bisnis, sementara kamu di sini masih saja belum terbiasa dengan lingkungan barumu.'
        }, {
            id: 2,
            order: 2,
            type: 'text',
            desc: 'Terhitung sudah dua minggu sejak keluargamu memutuskan untuk tinggal di kota ini, namun kamu masih jarang bermain atau bergaul keluar rumah. Tepatnya, kamu belum menemukan teman yang cocok di sini. Kebanyakan waktu kamu habiskan dengan berdiam diri di kamar, duduk depan laptop untuk menulis cerita-cerita fiksi yang selalu dinantikan oleh ‘teman-teman online-mu’.'
        }, {
            id: 3,
            order: 3,
            type: 'text',
            desc: 'Kamu adalah seorang penulis buku cerita fiksi bergenre drama-romance, padahal kamu sendiri tidak sedang merasakan romantisme pada kehidupan nyatamu. Kamu masih single semenjak putus dengan pacar terakhirmu. Alasan putus yang klasik karena jarak yang terbentang memisahkan, juga ego masing-masing yang telah memenangkan perannya. Namun, beruntung saja halusinasi dan imajinasimu dalam menulis romance masih berjalan dengan baik.'
        }, {
            id: 4,
            order: 4,
            type: 'text',
            desc: 'Kamu pun mulai merasa lapar dan memutuskan segera turun ke dapur untuk membuat sarapan. Kamu mengambil sekotak sereal coklat di kabinet dapur, kamu tuangkan ke dalam mangkuk kesayanganmu dan tidak lupa menambahkan susu segar sampai sereal itu terendam olehnya. Jadilah sarapan sereal cokelat favorit yang selalu bisa membangkitkan mood-mu sehari-hari.'
        }, {
            id: 5,
            order: 5,
            type: 'text',
            desc: 'Oh ya, kamu baru saja ingat sesuatu! Seorang teman online-mu meninggalkan sebuah pesan pribadi di akun twitter-mu, dan semalam kamu belum sempat untuk membukanya. Kamu segera bergegas kembali ke kamarmu setelah selesai menyiapkan sereal. Kamu menaiki tangga menuju kamarmu yang ada di lantai dua dengan cepat namun berhati-hati agar semangkuk sereal yang kamu pegang tidak tumpah.'
        }, ]
    }

    return (
        <div style={{ paddingTop: '80px', paddingBottom: '50px', backgroundColor: '#FEF9F4'}}>
            <center>
            <div style={{ maxWidth: '1000px', padding: '20px'}}>
                <h1 class='readingTextStyle' style={{marginBottom: '5px', textAlign: 'justify', fontSize: '24px', color: '#828282'}}>{bookData.bookTitle}</h1>
                <h2 class='readingTextStyle' style={{marginBottom: '5px', textAlign: 'justify', fontSize: '20px', color: '#BDBDBD'}}>{bookData.chapterTitle}</h2>
            </div>
            
            <div style={{ maxWidth: '1000px', padding: '20px'}}>
                
                {bookData.content.map((book, index) => {
                    return <p class='readingTextStyle' style={{whiteSpace: 'pre-line', textIndent: '50px', lineHeight: '32px', textAlign: 'justify'}}>
                                {book.desc}
                        </p>
                })}
            </div>
            </center>
            <center>
                {bookData.button.map((button, index) => {
                    return <div style={{ marginTop:'50px', display: 'flex' , width:'100%', maxWidth: '1000px', justifyContent: 'center'}}>
                    <Button text={button.desc} />
                </div>
                })}
            </center>
        </div>
    )
}


export default Read
