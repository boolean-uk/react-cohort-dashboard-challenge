import { useContext } from "react";
import { AppContext } from "../App";
import titleHeaderIcon from "../assets/title-header.svg";
import profileIcon from "../assets/profile-icon.svg";
import "./Styling/Header.css";

function getInitials(firstName, lastName) {
    return `${firstName[0]}${lastName[0]}`.toUpperCase();
  }

export default function Header() {
  const { user } = useContext(AppContext);

  return (
    <header className="header">
      <div className="header-left">
        <img src={titleHeaderIcon} alt="Title Header Icon" className="header-icon" />
        <h1 className="header-title"></h1>
      </div>
      <div className="header-right">
        {user ? (
          <div className="header-profile">
            <div 
            className="profile-initials"
            style={{backgroundColor: user.favouriteColour}}
            >
                {getInitials(user.firstName, user.lastName)}
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </header>
  );
}