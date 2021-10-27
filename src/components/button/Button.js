import PropTypes from 'prop-types'
import './Button.css'

const Button = (props) => {
    return (
        <div className ='button-container' onClick={props.onClick}>
            <p className = 'button-text'>
                {props.text}
            </p>
        </div>
    )
}

export default Button

