import homeIcon from "../../assets/home-icon.svg";
import profileIcon from "../../assets/profile-icon.svg";
import "@styles/Navbar.css";
import NavbarButton from "./NavbarButton";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-buttons">
        <NavbarButton icon={homeIcon}>Home</NavbarButton>
        <NavbarButton icon={profileIcon}>Profile</NavbarButton>
      </div>
    </nav>
  );
}
