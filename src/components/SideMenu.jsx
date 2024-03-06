import { Link } from "react-router-dom";

function SideMenu() {
    return (
      <nav className="side-menu">
        <ul className="side-menu-ul">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>Profile</li>
        </ul>
      </nav>
    );
}

export default SideMenu