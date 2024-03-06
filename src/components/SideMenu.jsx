import { Link } from "react-router-dom";
import HomeIcon from "./icons/HomeIcon";
import ProfileIcon from "./icons/ProfileIcon";

function SideMenu() {
    return (
      <nav className="side-menu">
        <ul className="side-menu-ul">
          <li className="menu-item">
            <HomeIcon />
            <Link to={"/"}>Home</Link>
          </li>
          <li className="menu-item">
            <ProfileIcon />
            Profile
          </li>
        </ul>
      </nav>
    );
}

export default SideMenu