import Book from './Book'



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
        <div>
            <div style={{ marginTop: '40px', marginBottom: '30px'}}>
                {title}
            </div>
            {data.length > 6 &&
            <div style={{ alignContent: 'center', justifyContent: 'center', width: '100%'}}>
                <div style={{ display: 'flex', flexDirection: 'row', overflow: 'auto'}}>
                    {data.map((x, index) => {
                        if (index > 5) return null
                        return <Book 
                        title={x.title} 
                        author={x.author}
                        likeCount={x.likeCount} 
                        viewCount={x.viewCount}
                        bookmarkCount={x.bookmarkCount}
                        bookImage={x.bookImage}
                        />
                    })}
                </div>
                <button>Show More</button>
            </div>
            }
            {data.length <= 6 && 
                <div style={{ display: 'flex', flexDirection: 'row', overflow: 'auto', width: '100%'}}>
                    {data.map((x, index) => {
                        if (index > 5) return null
                        return <Book 
                        title={x.title} 
                        author={x.author}
                        likeCount={x.likeCount} 
                        viewCount={x.viewCount}
                        bookmarkCount={x.bookmarkCount}
                        bookImage={x.bookImage}
                        />
                    })}
                </div>
            }
        </div>
    )
}

// Book.defaultProps = {
//     title: 'Book Title',
//     author: 'Book Author',
//     likeCount: '20',
//     viewCount: '100',
//     bookmarkCount: '5',
//     bookImage: book1,
// }

// Book.propTypes = {
//     title: PropTypes.string,
//     author: PropTypes.string,
//     likeCount: PropTypes.string,
//     viewCount: PropTypes.string,
//     bookmarkCount: PropTypes.string,
//     bookImage: PropTypes.any,
// }

export default Section
