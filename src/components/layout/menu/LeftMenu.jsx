import { Link, useLocation } from "react-router-dom";
import "../../../style/layout/menu/LeftMenu.css";
import HomeIconSvg from "../../icons/HomeIconSvg";
import ProfileIconSvg from "../../icons/ProfileIconSvg";
import { useContext } from "react";
import { postContext } from "../../../App";

const LeftMenu = () => {
    const location = useLocation();
    const { user } = useContext(postContext);
    return (
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
                        <HomeIconSvg />
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
                        <ProfileIconSvg />
                        Profile
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default LeftMenu;
