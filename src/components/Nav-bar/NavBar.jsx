import HomeIcon from "./components/HomeIcon";

import "../../Styles/nav-bar.css";
import Profile from "./components/Profile";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav className="nav-bar">
      <Link to={"/"}>
        <HomeIcon></HomeIcon>
      </Link>
      <Link to={"/user-profile"}>
        <Profile></Profile>
      </Link>
    </nav>
  );
}

export default NavBar;
