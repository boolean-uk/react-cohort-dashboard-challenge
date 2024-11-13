import { Link } from "react-router-dom";
import titleHeaderLogo from "../../assets/title-header.svg";
import ProfileCircle from "../profile-circle/ProfileCircle";
import { useContext } from "react";
import { AppContext } from "../../App";
import './header.css';

function Header() {

  const { loggedInUser } = useContext(AppContext)

  return (
    <header>
      <div className="logo">
        <link rel="stylesheet" href="" />
        <Link to="/">
            <img src={titleHeaderLogo} alt="title" />
        </Link>
      </div>
      <div>
        <ProfileCircle userInitals={loggedInUser.initials} />
      </div>
    </header>
  );
}

export default Header;