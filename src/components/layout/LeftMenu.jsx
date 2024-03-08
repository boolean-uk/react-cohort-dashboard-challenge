import { Link, useLocation } from "react-router-dom";
import HomeIcon from "../icons/HomeIcon";
import ProfileIcon from "../icons/ProfileIcon";
import { useContext } from "react";
import { postContext } from "../../App";


const LeftMenu = () => {
    const location = useLocation();
    const { user } = useContext(postContext);
    return (
        <>
      
        <nav className="left-menu">
            <ul className="page-list">
                <li
                    className={
                        !location.pathname.startsWith("/profile/")
                            ? "item active"
                            : "item"
                    }
                >
                    <Link to="/" className="nav-button">
                        <HomeIcon />
                        Home
                    </Link>
                </li>
                <li
                    className={
                        location.pathname.startsWith("/profile/")
                            ? "item active"
                            : "item"
                    }
                >
                    <Link to={"/profile/" + user.id} className="nav-button">
                        <ProfileIcon />
                        Profile
                    </Link>
                </li>
            </ul>
        </nav>
        </>
    );
};

export default LeftMenu;