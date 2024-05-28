import PropTypes from 'prop-types'
export default function NavItem({svg, itemName, active}) {
    return (
        <li className={active.toUpperCase() === itemName.toUpperCase() ? "active" : ""}>
            {svg}
            <p>{itemName}</p>
        </li>
    )
}

NavItem.propTypes = {
    svg: PropTypes.object,
    itemName: PropTypes.any,
    active: PropTypes.any
}