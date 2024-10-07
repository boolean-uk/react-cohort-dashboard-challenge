import homeIcon from '../assets/home-icon.svg'
import profileIcon from '../assets/profile-icon.svg'
import { Link } from "react-router-dom";

function Sidebar() {
    return(
        <nav className="sidebar">
            <Link to="/">
                <button className="card" >
                    <img className="homeSidebar" src={homeIcon}/>
                    <p>Home</p>
                </button>
            </Link>
            <Link to="/profile">
                <button className="card">
                    <img className="profileSidebar" src={profileIcon}/>
                    <p>Profile</p>
                </button>
            </Link>
        </nav>
    )
}

export default Sidebar