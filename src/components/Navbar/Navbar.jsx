import homeIcon from "../../assets/home-icon.svg";
import profileIcon from "../../assets/profile-icon.svg";
import "@styles/Navbar.css";
import NavbarButton from "./NavbarButton";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div name="username" className="navbar-buttons">
        <NavbarButton icon={homeIcon} href="/">
          Home
        </NavbarButton>
        <NavbarButton icon={profileIcon} href="/profile/Sabbasn">
          Profile
        </NavbarButton>
      </div>
    </nav>
  );
}
