import PropTypes from 'prop-types'

const NavigationMenuItem = ({ activeNavigation, onClickFunc, onClickFuncParams, elementIcon, elementText}) => {
    return (
        <div 
            className={activeNavigation === elementText
                ? "navigation-home-button active" 
                : "navigation-home-button"
            }
            onClick={() => onClickFuncParams ? onClickFunc(onClickFuncParams) : onClickFunc()}
        >
            <img alt={`Navigation icon for ${elementText}`} src={elementIcon}/>
            <p>{elementText}</p>
        </div>
    )
}

NavigationMenuItem.propTypes = {
    activeNavigation: PropTypes.string.isRequired,
    onClickFunc: PropTypes.func.isRequired,
    onClickFuncParams: PropTypes.string,
    elementIcon: PropTypes.string.isRequired,
    elementText: PropTypes.string.isRequired,
}

export default NavigationMenuItem