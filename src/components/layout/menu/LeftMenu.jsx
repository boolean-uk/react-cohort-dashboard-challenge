import { Link } from "react-router-dom";
import "../../../style/layout/menu/LeftMenu.css";
import HomeIconSvg from "../../icons/HomeIconSvg";
import ProfileIconSvg from "../../icons/ProfileIconSvg";

const LeftMenu = () => {
    return (
        <nav className="left-menu">
            <ul className="page-list">
                <li className={"item active"}>
                    <Link to="/" className="nav-button">
                        <HomeIconSvg />
                        Home
                    </Link>
                </li>
                <li className={"item"}>
                    <Link to="/" className="nav-button">
                        <ProfileIconSvg />
                        Profile
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default LeftMenu;
