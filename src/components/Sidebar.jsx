import { Link } from "react-router-dom";
import HomeIcon from "../assets/HomeIcon.jsx";
import ProfileIcon from "../assets/ProfileIcon.jsx";
import "./styling/sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul className="sidebar-nav">
          <li>
            <Link to="/" className="nav-link">
              <HomeIcon className="icon" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/profile" className="nav-link">
              <ProfileIcon className="icon" />
              <span>Profile</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;