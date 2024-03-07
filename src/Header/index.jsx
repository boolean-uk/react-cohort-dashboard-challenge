import { useContext } from "react";
import { Link } from "react-router-dom";
import headerIconSvg from "../_assets/title-header.svg";
import { AppContext } from "../App.jsx";

const Header = () => {
  const { profile } = useContext(AppContext);

  const getInitials = (firstName, lastName) => {
    const firstInitial = firstName && firstName.length > 0 ? firstName[0] : "";
    const lastInitial = lastName && lastName.length > 0 ? lastName[0] : "";
    return `${firstInitial}${lastInitial}`;
  };

  const userInitials = getInitials(profile.firstName, profile.lastName);

  return (
    <nav className="header">
      <div className="header-content">
        <img className="header-icon" src={headerIconSvg} />
      </div>
      <div className="user-profile">
        <Link to="/profile" className="profile-icon">
          <div
            style={{ backgroundColor: profile.favouriteColour }}
            className="initials-circle"
          >
            {userInitials}
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
