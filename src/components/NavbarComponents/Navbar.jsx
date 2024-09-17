import React from "react";
import { useLocation } from "react-router-dom";
import NavbarButton from "./NavbarButton";
import homeIcon from "../../assets/home-icon.svg";
import profileIcon from "../../assets/profile-icon.svg";
import "../../styles/Navbar.css";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div name="username" className="navbar-buttons">
        <NavbarButton
          icon={homeIcon}
          href="/"
          isActive={location.pathname === "/"}
          className="home-button"
        >
          Home
        </NavbarButton>
        <NavbarButton
          icon={profileIcon}
          href="/profile/1"
          isActive={location.pathname.startsWith("/profile")}
          className="prof-button"
        >
          Profile
        </NavbarButton>
      </div>
    </nav>
  );
}
