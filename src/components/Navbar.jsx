import "../styles/Navbar.css";
import HomeIcon from "../assets/home-icon.svg";
import ProfileIcon from "../assets/profile-icon.svg";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../App";
export default function Navbar() {
    const navigate = useNavigate();
    const {user} = useContext(UserContext)

    return (
        <div className='navbar'>
            <div className="iconContainer" onClick={() => navigate("/")}>
                <img className="homeIcon" src={HomeIcon} />
                <p>Home</p>
            </div>
            <div className="iconContainer" onClick={() => navigate(`/profile/${user.id}`)}>
                <img className="profileIcon" src={ProfileIcon} />
                <p>Profile</p>
            </div>
        </div>
    )
}