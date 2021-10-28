import PropTypes from 'prop-types'
import book1 from '../../assets/img/book1.png'
import like from '../../assets/img/like.png'
import bookmark from '../../assets/img/bookmark.png'
import view from '../../assets/img/view.png'
import Icon from '@material-ui/core/Icon'
import './Book.css'
import '../../Common.css'


const Book = ({ props }) => {

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

    return (
        <div class='book_container'>
            <a href={`/summary/${props.id}`} style={{display: 'flex', flexFlow: 'row', marginBottom: '5px', height: 'auto'}}>
                <div style={{width: '20px', backgroundColor: props.sideColor}}/>
                <div style={{
                    width: '100%',
                    overflow: 'hidden',
                    backgroundSize : 'contain',
                }}>
                    <img class='book_cover_image' src={props.bookImage} alt="promoImage" />
                </div>
            </a>
            <div>
                <h5 style={{ fontFamily: 'ralewak', marginBottom: '5px'}}>
                    {props.title}
                </h5>
                <p style={{ fontFamily: 'ralewak', marginBottom: '5px'}}>
                    {props.author}
                </p>
                <div class="icon_container">
                    <div className={"center"} style={{fontSize: '12px', marginRight: '5px'}}>
                        <Icon style={{ color: '#828282', marginRight: '5px', fontSize: '12px'}}>{'favorite'}</Icon> {props.likeCount}
                    </div>
                    <div className={"center"} style={{fontSize: '12px', marginRight: '5px'}}>
                        <Icon style={{ color: '#828282', marginRight: '5px', fontSize: '12px'}}>{'visibility'}</Icon> {props.viewCount}
                    </div>
                    <div className={"center"} style={{fontSize: '12px', marginRight: '5px'}}>
                        <Icon style={{ color: '#828282', marginRight: '5px', fontSize: '12px'}}>{'bookmarkBorder'}</Icon>{props.bookmarkCount}
                    </div>
                </div>
            </div>
        </div>
    )
}

Book.defaultProps = {
    id: 1,
    title: 'Book Title',
    author: 'Book Author',
    likeCount: '20',
    viewCount: '100',
    bookmarkCount: '5',
    bookImage: book1,
    sideColor: '#459FC4'
}

Book.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    likeCount: PropTypes.string,
    viewCount: PropTypes.string,
    bookmarkCount: PropTypes.string,
    bookImage: PropTypes.any,
    sideColor: PropTypes.string,
}

export default Book
