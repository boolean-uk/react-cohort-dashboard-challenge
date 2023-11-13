import Home from "./components/Home";

import "../../Styles/nav-bar.css";
import Profile from "./components/Profile";
function NavBar() {
  return (
    <nav className="nav-bar">
      <Home></Home>
      <Profile></Profile>
    </nav>
  );
}

export default NavBar;
