import { useContext } from "react";
import { AppContext } from "../App.jsx";
import { Link } from "react-router-dom";
import headerIconSvg from '../_assets/title-header.svg'

const Header = () => {
  const { userInitials } = useContext(AppContext);

  return (
    <nav className="header">
      <div className="header-content">
        <img className="header-icon" src={headerIconSvg} />
      </div>
      <div className="user-profile">
        <Link to="/profile" className="profile-icon">
          <div className="initials-circle">{userInitials}</div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
