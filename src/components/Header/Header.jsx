import './Header.css'
import HeaderLogo from '../../assets/headerlogo.svg'
import ProfileIcon from '../../assets/profile.svg'
import { NavLink } from 'react-router-dom'

function Header () {
    return (
        <div className='header'>
            <img src={HeaderLogo} className='header-logo'/>
            <NavLink className={({isActive}) => isActive ? "active-icon" : ""} to="/primeUser/1">
            <img src={ProfileIcon} />
            </NavLink>

        </div>
    )
}

export default Header