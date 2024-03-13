import homeIcon from "../assets/homeIcon.svg"
import profileIcon from "../assets/profileIcon.svg"
import "../styles/LeftMenu.css"

export default function LeftMenu() {

    return (
        <nav className="left-menu">
        <div>
            <img src={homeIcon} alt="Home" />
            <img src={profileIcon} alt="Profile" />
        </div>
    </nav>
    )
}