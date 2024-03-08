import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import "./index.css";
import profileIcon from "../assets/profile-icon.svg";
import homeIcon from "../assets/home-icon.svg";
import { UserContext } from "../App";

export default function LeftMenu() {
    const navigate = useNavigate();

    const userContext = useContext(UserContext);

    const goToHomePage = () => {
        navigate("/");
    };

    let mainUser = userContext.users.find(
      (user) => user.id === userContext.mainUserId
    );
    if (!mainUser) return <div></div>;

    const goToProfile = () => {
      navigate(`/view_profile/${mainUser.id}`);
    };

    return (
      <nav className="sidebar">
        <div className="sidebar_icon_container">
          <button className="sidebar_button" onClick={goToHomePage}>
            <img className="sidebar_image" src={homeIcon} />
            <p className="sidebar_text">Home</p>
          </button>
        </div>


        <div className="sidebar_icon_container">
          <button className="sidebar_button" onClick={goToProfile}>
            <img className="sidebar_image" src={profileIcon} />
            <p className="sidebar_text">Profile</p>
          </button>
        </div>
      </nav>
    );
}
