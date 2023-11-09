import homeIcon from '../../../_assets/home-icon.svg'
import profileIcon from '../../../_assets/profile-icon.svg'

import '../../styles/navigation.css'

function Navigation() {

    return (
        <nav className='navigation-menu'>
            <div className='nav-icon-container'>
                <img className='nav-icon-img' src={homeIcon} alt="home icon" />
                <p className='nav-icon-text'>Home</p>
            </div>
            <div className='nav-icon-container'>
                <img className='nav-icon-img' src={profileIcon} alt="profile icon" />
                <p className='nav-icon-text'>Profile</p>
            </div>         
        </nav>
    )
}

export default Navigation