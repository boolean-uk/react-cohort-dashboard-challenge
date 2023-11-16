import HomePic from "../assets/Home.svg";
import ProfilePic from "../assets/ProfilePic.svg";

export default function Menu () {

return (
    <>
    <div className="menu">
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