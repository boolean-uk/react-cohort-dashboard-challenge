import HomeIcon from "./components/HomeIcon";

import "../../Styles/nav-bar.css";
import Profile from "./components/Profile";
function NavBar() {
  return (
    <nav className="nav-bar">
      <HomeIcon></HomeIcon>
      <Profile></Profile>
    </nav>
  );
}

export default NavBar;
