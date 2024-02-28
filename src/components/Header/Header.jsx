import titleHeader from "../../assets/title-header.svg";
import "@styles/Header.css";
import ProfileCircle from "../ProfileCircle";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
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
          fullname={"Test User"}
          color={"#64dc78"}
          contactId={"1"}
        />
      </div>
    </nav>
  );
}
