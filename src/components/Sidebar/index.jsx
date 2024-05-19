
import { Link } from "react-router-dom"
import iconHome from "./assets/home-icon.svg"
import iconProfile from "./assets/profile-icon.svg"
import "./Sidebar.css"
export default function Sidebar(){


    return (
        <>
            <nav>
                <Link to="/">
                    <div className="nav-item">
                        <img className="nav-home" src={iconHome} alt="home" />
                    </div>
                </Link>
                <Link to="/profile">
                    <div className="nav-item">
                        <img className="nav-profile" src={iconProfile} alt="profile" />
                    </div>
                </Link>
            </nav>
        </>
    )
}
