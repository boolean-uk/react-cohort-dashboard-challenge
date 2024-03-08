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
    activeNavigation: PropTypes.string,
    onClickFunc: PropTypes.func,
    onClickFuncParams: PropTypes.string,
    elementIcon: PropTypes.func,
    elementText: PropTypes.string,
}

export default NavigationMenuItem