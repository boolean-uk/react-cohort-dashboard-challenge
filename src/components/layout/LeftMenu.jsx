import { Link, useLocation } from "react-router-dom";
import HomeIcon from "../icons/HomeIcon";
import ProfileIcon from "../icons/ProfileIcon";


const LeftMenu = () => {
    const location = useLocation();
    return (
        <>
      
        <nav className="left-menu">
            <ul className="page-list">
                <li
                    className={
                        location.pathname !== "/profile/"
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
                        location.pathname === "/profile/"
                            ? "item active"
                            : "item"
                    }
                >
                    <Link to="/profile/" className="nav-button">
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