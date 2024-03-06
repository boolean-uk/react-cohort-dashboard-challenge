import { Link, useLocation } from "react-router-dom";
import "../../../style/layout/menu/LeftMenu.css";
import HomeIconSvg from "../../icons/HomeIconSvg";
import ProfileIconSvg from "../../icons/ProfileIconSvg";

const LeftMenu = () => {
    const location = useLocation();

    console.log("Current path:", location.pathname);

    return (
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
                        <HomeIconSvg />
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
                        <ProfileIconSvg />
                        Profile
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default LeftMenu;
