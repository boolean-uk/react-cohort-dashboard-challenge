import { useContext } from "react";
import { Link } from "react-router-dom";
import headerIconSvg from "../_assets/title-header.svg";
import { AppContext } from "../App.jsx";

const Header = () => {
  const { profile } = useContext(AppContext);

  const getInitials = (firstName, lastName) => {
    // Check if firstName and lastName are provided
    const firstInitial = firstName ? firstName[0] : "";
    const lastInitial = lastName ? lastName[0] : "";
    return `${firstInitial}${lastInitial}`;
  };

  // Provide fallback values for firstName, lastName, and favouriteColour
  // to avoid trying to access properties of null
  const userInitials = profile
    ? getInitials(profile.firstName, profile.lastName)
    : "";
  const favouriteColour = profile ? profile.favouriteColour : "#ffffff";

  return (
    <nav className="header">
      <div className="header-content">
        <img className="header-icon" src={headerIconSvg} />
      </div>
      <div className="user-profile">
        <Link to="/profile" className="profile-icon">
          <div
            style={{ backgroundColor: favouriteColour }}
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
