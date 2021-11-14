import './category.css'
import {generalCategory, detailedCategory} from '../../const/categoryData'

const Category = ({ props }) => {

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
        <div style={{
            position: 'absolute',
            right: 0,
            top: 75,
            left: 60,
            bottom: 0,
            width: '80%',
            zIndex: 1}}>
                <div style={{
                    padding: '20px',
                    borderRadius: '20px',
                    backgroundColor: '#ffffff',
                    paddingBottom: '30px',
                    zIndex: 1,
                    boxShadow:' 0px 0px 5px',
                }}>
                    <p>Kategori Besar:</p>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        {generalCategory.map((category, index) => {
                            return<div style={{ fontSize: '15px', backgroundColor:"#F2F2F2", margin: '10px', padding: '10px', borderRadius: '100px' }}>
                                {category.categoryName}
                            </div>
                        })}
                    </div>
                    <div>
                        <p>Kategori Seluruhnya</p>
                        <div className='category-detail-container'>
                            {detailedCategory.map((category, index) => {
                                return <div style={{display: 'flex', flexDirection: 'row'}}>
                                    <p style={{ color: '#E0E0E0', fontSize: '32px', paddingRight: '10px', fontWeight: 'bold' }}>{category.categoryInitial}</p>
                                    <ul style={{listStyleType: 'none'}}>
                                    {category.categoryName.map((categoryName, index) => {
                                        return <li>
                                            <a href={""} style={{ textDecoration: 'none', display: 'block', fontSize: '12px', color:'#333333'}}>
                                                {categoryName}
                                            </a>
                                        </li>
                                    })}
                                    </ul>
                                </div>
                                })}
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Category
