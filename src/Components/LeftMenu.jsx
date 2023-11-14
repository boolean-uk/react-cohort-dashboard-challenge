import HomePic from "../assets/HomePic.svg";
import ProfilePic from "../assets/ProfilePic.svg";

export default function LeftMenu () {

return (
    <>
    <div className="left-menu">
        <div className="menu-item">
          <img className="HomePic" src={HomePic} alt="HomePic" />
          <p>Home</p>
        </div>
        <div className="menu-item">
          <img className="profile-icon" src={ProfilePic} alt="Profile" />
          <p>Profile</p>
        </div>
      </div>
    </>
)

}