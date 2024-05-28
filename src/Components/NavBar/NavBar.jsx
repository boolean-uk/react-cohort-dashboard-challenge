import NavItem from './NavItem/NavItem'
import { Link } from 'react-router-dom' //importing Link. DOM to enable navigation
import PropTypes from 'prop-types'

export default function NavBar({ active }) {
    return (
    
    <ul className="nav-bar">

    <Link to={"/"}><NavItem
    svg={
                <svg width="33" height="36" viewBox="0 0 33 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 36V12L16.6 0L32.5 12V36H20.8V21.75H12.15V36H0.5Z" fill="#64648C" />
    </svg>
    }
    itemName={"Home"}

    active={active} 

    />
    </Link>
    </ul>
    )
}

NavBar.propTypes ={
    active:PropTypes.string.isRequired
}

