import { Link, useLocation, useNavigate } from "react-router-dom";
import homeIcon from "../../assets/home.svg";
import profileIcon from "../../assets/profile.svg";
import "./style.scss";
import { useEffect } from "react";

export default function LeftMenu({ id }) {
  const targeted = "notFocused";
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };

  let currentUrl = useLocation().pathname;
  
  if (!currentUrl.includes("profile")) {
    return (
      <div className="leftMenuParent">
        <div className="iconDiv targeted" onClick={navigateHome}>
          <img src={homeIcon} className="homeIcon" />
          <p>Home</p>
        </div>
        <div className="iconDiv profile">
          <Link to={`/profile/${id}`} className="profileLink">
            <img src={profileIcon} className="profileIcon" />
          </Link>
          <p>Profile</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="leftMenuParent">
        <div className="iconDiv " onClick={navigateHome}>
          <img src={homeIcon} className="homeIcon" />
          <p>Home</p>
        </div>
        <div className="iconDiv profile targeted">
          <Link to={`/profile/${id}`} className="profileLink">
            <img src={profileIcon} className="profileIcon" />
          </Link>
          <p>Profile</p>
        </div>
      </div>
    );
  }
}
