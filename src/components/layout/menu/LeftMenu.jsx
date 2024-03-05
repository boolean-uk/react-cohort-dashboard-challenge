import { Link } from "react-router-dom";
import HomeIconSvg from "../../icons/HomeIconSvg";
import ProfileIconSvg from "../../icons/ProfileIconSvg";

const LeftMenu = () => {
    return (
        <nav className="left-menu">
            <ul className="page-list">
                <li className={"item active"}>
                    <Link to="/">
                        <HomeIconSvg />
                    </Link>
                </li>
                <li className={"item"}>
                    <Link to="/">
                        <ProfileIconSvg />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default LeftMenu;
