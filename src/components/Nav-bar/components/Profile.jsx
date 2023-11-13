import profileIcon from "../../../assets/profile-icon.svg";

function Profile() {
  return (
    <div className="nav-icon">
      <img className="nav-icon--img" src={profileIcon} alt="profile-icon" />
      <p className="nav-icon--text">Profile</p>
    </div>
  );
}

export default Profile;
