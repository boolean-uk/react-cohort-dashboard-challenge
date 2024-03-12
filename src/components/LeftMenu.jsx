import "/src/style/LeftMenu.css"
import {Link} from "react-router-dom";

export default function LeftMenu () {
    return (
    
    <div className="leftMenu">
      <Link link to={"/"}>
      <div className="linkContainer">
        <img className="homeIcon" src="/src/assets/home-icon.svg" />
        <p><b>Home</b></p>
      </div>
      </Link>
      <Link link to={"/profile/1"}>
      <div className="linkContainer">
        <img className="profileIconLeft" src="/src/assets/profile-icon.svg" />
        <p><b>Profile</b></p>
      </div>
      </Link>
      <Link link to={"/createProfile"}>
      <div className="linkContainer">
        <img className="profileIconLeft" src="/src/assets/profile-icon.svg" />
        <p><b>Create</b></p>
      </div>
      </Link>
    </div>)
}