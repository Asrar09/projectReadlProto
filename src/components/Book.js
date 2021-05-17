import PropTypes from 'prop-types'
import book1 from '../assets/img/book1.png'
import like from '../assets/img/like.png'
import bookmark from '../assets/img/bookmark.png'
import view from '../assets/img/view.png'


const Book = ({ title, author, likeCount, viewCount, bookmarkCount, bookImage }) => {

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
        <div style={{ marginRight: '20px' }}>
            <div style={{
                backgroundImage: `url(${bookImage})`,
                height: '346px',
                width: '221px',
                backgroundRepeat: 'no-repeat'
            }}>
            </div>
            <div>
                <div style={{ fontFamily: 'ralewak.;.;.'}}>
                    {title}
                </div>
                <div>
                    {author}
                </div>
                <div style={{ display: 'flex', flexDirection: 'row'}}>
                    <img src={like} alt="likeIcon"/>
                    <div style={{
                        marginRight: '10px',
                        marginLeft: '5px'
                    }}>
                        {likeCount} k
                    </div>
                    <img src={bookmark} alt="bookmarkICon"/>
                    <div style={{
                        marginRight: '10px',
                        marginLeft: '5px'
                    }}>
                        {viewCount}
                    </div>
                    <img src={view} alt="viewIcon"/>
                    <div style={{
                        marginRight: '10px',
                        marginLeft: '5px'
                    }}>
                        {bookmarkCount}
                    </div>
                </div>
            </div>
        </div>
    )
}

Book.defaultProps = {
    title: 'Book Title',
    author: 'Book Author',
    likeCount: '20',
    viewCount: '100',
    bookmarkCount: '5',
    bookImage: book1,
}

Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    likeCount: PropTypes.string,
    viewCount: PropTypes.string,
    bookmarkCount: PropTypes.string,
    bookImage: PropTypes.any,
}

export default Book
