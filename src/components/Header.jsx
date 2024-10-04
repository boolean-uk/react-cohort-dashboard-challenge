import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import "./styling/header.css";
import ProfileImage from "./ProfileImage";
import Logo from "../assets/Logo.jsx";

function Header() {
  const { users, currentUser, setCurrentUser } = useContext(UserContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleUserSelect = (user) => {
    setCurrentUser(user);
    setShowDropdown(false);
  };

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="user-profile">
        {currentUser && (
          <div onClick={() => setShowDropdown(!showDropdown)}>
            <ProfileImage user={currentUser} />
          </div>
        )}
        {showDropdown && (
          <div className="user-dropdown">
            <ul>
              {users.map((user) => (
                <li key={user.id} onClick={() => handleUserSelect(user)}>
                  <div className="user-dropdown-item">
                    <ProfileImage user={user} />
                    <span className="user-dropdown-text">
                      {user.firstName} {user.lastName}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
