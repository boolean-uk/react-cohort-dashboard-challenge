import "../styles/Navbar.css";
import HomeIcon from "../assets/home-icon.svg";
import ProfileIcon from "../assets/profile-icon.svg";
export default function Navbar() {
    return (
        <div className='navbar'>
            <div className="iconContainer">
                <img className="homeIcon" src={HomeIcon} />
                <p>Home</p>
            </div>
            <div className="iconContainer">
                <img className="profileIcon" src={ProfileIcon} />
                <p>Profile</p>
            </div>
        </div>
    )
}