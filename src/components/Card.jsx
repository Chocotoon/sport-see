import '../styles/Card.css'
import PropTypes from 'prop-types'

/**
 * 
 * @param { String } url of image 
 * @returns { HTMLElement } 
 */
function Card({ data, image, unit, type }) {

    return (
        <div className="card">
           <img src= {image} alt=""></img>
           <div className="card_value">
            <p className='amount'>{data}{unit}</p>
            <p className='type'>{type}</p>
           </div>

        </div>
    )
}

Card.propTypes = {
    data: PropTypes.number,
    image: PropTypes.string,
    unit: PropTypes.string, 
    type: PropTypes.string
}

export default Card