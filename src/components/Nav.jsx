import homeIcon from '../assets/home-icon.svg'
import profileIcon from '../assets/profile-icon.svg'

function Nav() {
    return (
        <nav className="sidebar red">
            <img src={homeIcon} alt="home icon" />
            <img src={profileIcon} alt="profile icon" />
        </nav>
    )
}

export default Nav