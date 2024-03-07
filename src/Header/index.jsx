import { useContext } from "react";
<<<<<<< HEAD
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
=======
import { AppContext } from "../App.jsx";
import { Link } from "react-router-dom";
import headerIconSvg from '../_assets/title-header.svg'

const Header = () => {
  const { userInitials } = useContext(AppContext);
>>>>>>> 23056adfe6455c018ed5eaffd32cccae66c05ee8

  return (
    <nav className="header">
      <div className="header-content">
        <img className="header-icon" src={headerIconSvg} />
      </div>
      <div className="user-profile">
        <Link to="/profile" className="profile-icon">
<<<<<<< HEAD
          <div
            style={{ backgroundColor: profile.favouriteColour }}
            className="initials-circle"
          >
            {userInitials}
          </div>
=======
          <div className="initials-circle">{userInitials}</div>
>>>>>>> 23056adfe6455c018ed5eaffd32cccae66c05ee8
        </Link>
      </div>
    </nav>
  );
};

export default Header;
