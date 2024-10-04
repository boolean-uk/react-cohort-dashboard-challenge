import { useContext } from "react";
import "../Left-Menu/LeftMenu.css";
import HomeIcon from "./HomeIcon";
import ProfileIcon from "./ProfileIcon";
import { Link } from "react-router-dom";
import { PostContext } from "../../App";

export default function LeftMenu() {
    const { loggedInUser } = useContext(PostContext);
    return(
        <nav className="left-menu">
            <Link to="/" className="home-icon"> 
                <HomeIcon /> 
                Home
            </Link>
            <Link to={`/profile/${loggedInUser.id}`} className="profile-icon">
                <ProfileIcon />
                Profile
            </Link>
        </nav>
    );
}