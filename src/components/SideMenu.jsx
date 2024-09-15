import { Link } from "react-router-dom";
import HomeIcon from "./icons/HomeIcon";
import ProfileIcon from "./icons/ProfileIcon";

function SideMenu() {
  return (
    <nav className="side-menu">
      <ul className="side-menu-ul">
        <li className="menu-item">
          <Link to={"/"}>
            <button className="menu-item-button">
              <HomeIcon />
              Home
            </button>
          </Link>
        </li>

        <li className="menu-item">
          <Link to={"/profile"}>
            <button className="menu-item-button">
              <ProfileIcon />
              Profile
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideMenu;
