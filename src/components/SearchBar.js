import PropTypes from 'prop-types'
import searchLogo from '../assets/img/search.png'

const SearchBar = ({ text }) => {
    return (
        <div style={{ display: 'flex', height: '36px', backgroundColor: '#F2F2F2', borderRadius: 40, padding: '10px', marginRight: '15px', textAlign: 'center', verticalAlign: 'middle', justifyContent: 'center'}}>
            <input type="text" style={{
                marginLeft: 10,
                marginBottom: 5,
                height: '100%',
                backgroundColor: 'transparent',
                border: 'none',
                borderColor: 'transparent',
                outline: 'none'
                }}/>
            <img src={searchLogo} alt="headerLogo" style={{
                height: '100%',
                width: 'auto',
            }}/>
        </div>
    )
}

export default SearchBar

