import { Link } from "react-router-dom";
import HomeIcon from "../../assets/home-icon-svg.svg";
import ProfileImage from "../../assets/profile-icon-svg.svg";

export default function Aside() {
  return (
    <aside>
      <Link to={"/post/:id"}>
        <img src={HomeIcon} alt="home-icon" />
        <h3>Home</h3>
      </Link>
      <Link to={"/profileForm"}>
        <img src={ProfileImage} alt="profile-icon" />
        <h3>Profile</h3>
      </Link>
    </aside>
  );
}
