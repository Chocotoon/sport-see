import PropTypes from 'prop-types'
/**
 * 
 * @param { string } url of image
 * @returns { HTMLElement }
 */
function Icon ({children}) {
    return (
        <div className="icon_wrapper">
             <img src= { children } alt =""></img>
        </div>
    )
}

Icon.propTypes = {
    children: PropTypes.string
}
export default Icon