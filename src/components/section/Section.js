import Book from '../Book/Book'
import '../../Common.css'
import CardItem from '../CardItem'
import '../Cards.css'
import './Section.css'

import book1 from '../../assets/img/book1.png'
import book2 from '../../assets/img/book2.png'
import book3 from '../../assets/img/book3.png'
import book4 from '../../assets/img/book4.png'
import book5 from '../../assets/img/book5.png'



const Section = ({ title, data }) => {

    const onClickBeranda = () => {
        console.log('Beranda')
    }

    const onClickKategori = () => {
        console.log('Kategori')
    }

    const onClickTentang = () => {
        console.log('Tentang')
    }

    const onClickBantuan = () => {
        console.log('Bantuan')
    }
    
    const moreThanSix = () => {
        console.log('data.length : ', data.length)
        if(data.length > 6) return true
        return false 
    }

    console.log('data.length : ', data.length)

    return (
        <div className= 'section-container'>
            <div className= 'section-header-container'>
                {title}
                <p>Show more ></p>
            </div>
            <div className= 'section-book-container'>
                {data.map((book, index) => {
                    if (index > 5) return null
                    return<Book props={book}/>
                   
                })}
            </div>
        </div>
    )
}

export default Section
