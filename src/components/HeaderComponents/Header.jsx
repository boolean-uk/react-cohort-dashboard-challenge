import titleHeader from "../../assets/title-header.svg";
import "../../styles/Header.css";
import ProfileCircle from "../ProfileComponents/ProfileCircle";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../routes/root";

export default function Header() {
  const navigate = useNavigate();
  const currentUser = useContext(UserContext);

  return (
    <nav className="header">
      <div className="header-group">
        <img
          className="header-logo"
          src={titleHeader}
          alt="cohort-manager-logo"
          onClick={() => navigate("/")}
        />
        <ProfileCircle
          className="profile-circle"
          color={currentUser.favouriteColour}
          fullname={`${currentUser.firstName} ${currentUser.lastName}`}
          contactId={currentUser.id}
        />
      </div>
    </nav>
  );
}