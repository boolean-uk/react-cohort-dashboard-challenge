import { useContext, useEffect } from "react";
import { MyContext } from "../App";
import headerIcon from "../assets/header-icon.svg";
import { Link } from "react-router-dom";

export default function Header() {
  const context = useContext(MyContext);

  const getInitials = (firstName, lastName) => {
    const firstInitial = firstName ? firstName[0].toUpperCase() : "";
    const lastInitial = lastName ? lastName[0].toUpperCase() : "";
    return `${firstInitial}${lastInitial}`;
  };

  const initials = getInitials(context.user.firstName, context.user.lastName);

  return (
    <>
      <header className="header">
        <img src={headerIcon} className="header-icon" />
        <div className="space"></div>
        <Link to="/profile">
          <div
            className="header-profile-icon"
            style={{ backgroundColor: context.user.favouriteColour }}
          >
            {initials}
          </div>
        </Link>
      </header>
    </>
  );
}
