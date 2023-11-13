
import HomeIcon from '/src/assets/icons/home-icon.svg'
import ProfileIcon from '/src/assets/icons/profile-icon.svg'
import { Link } from 'react-router-dom';

export default function SideBar() {
    return (
        <div className="side-bar">
            <Link to="/">
                <div className="home-icon-container">
                <img src={HomeIcon} alt="Home-icon" />
                    <p>Home</p>
                </div>
            </Link>
            <div className="profile-icon-container">
                <img src={ProfileIcon} alt="Profile-icon" />
                <p>Profile</p>
            </div>
        </div>
    )
}