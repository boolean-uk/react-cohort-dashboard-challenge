import titleHeader from "../assets/title-header.svg";
import "../styles/Header.css";
import ProfileCircle from "./ProfileCircle";

export default function Header() {
  return (
    <nav className="header">
      <div className="header-group">
        <img
          className="header-logo"
          src={titleHeader}
          alt="cohort-manager-logo"
        />
        <ProfileCircle
          className="profile-circle"
          fullname={"Test User"}
          color={"#64dc78"}
        />
      </div>
    </nav>
  );
}
