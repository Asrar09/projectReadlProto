

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
            top: 100,
            left: 190,
            bottom: 0,
            boxShadow: '0 6px 20px rgba(56, 125, 255, 0.17)',
            zIndex: 1}}>
                <div style={{   
                    borderRadius: '20px',
                    backgroundColor: 'red',
                    width: '80%',
                    zIndex: 1
                }}>
                    <h1>Kategori Besar:</h1>
                    <div>

                    </div>
                    <div>
                        <h1>Kategori Seluruhnya</h1>
                        <div>
                            <div>
                                <h5>A</h5>
                            </div>
                            <div>
                                <ul>
                                    <li>Anak</li>
                                    <li>Drama</li>
                                    <li>Anak</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Category
