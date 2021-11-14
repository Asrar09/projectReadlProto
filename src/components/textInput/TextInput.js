import PropTypes from 'prop-types'
import './TextInput.css'

const TextInput = (props) => {
    return (
        <div className ='text-input-container' onClick={props.onClick}>
            <label>Name:</label>
            <input type="text" name="name" />
        </div>
    )
}

export default TextInput

