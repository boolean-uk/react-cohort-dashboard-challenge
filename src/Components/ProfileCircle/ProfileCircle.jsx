import { useNavigate } from "react-router-dom";
import "./ProfileCircle.css";

function ProfileCircle({ user }) {
  const nav = useNavigate();

  if (!user || user.firstName === undefined || user.lastName === undefined) {
    return <div className="profile-circle">N/A</div>;
  }

  const firstNameLetter = user.firstName[0];
  const lastNameLetter = user.lastName[0];
  const color = user.favouriteColour;
  const goToProfile = () => nav(`/profile/${user.id}`);

  const circleColor = {
    "--profile-color": color,
  };
  return (
    <div className="profile-circle" style={circleColor} onClick={goToProfile}>
      {firstNameLetter}
      {lastNameLetter}
    </div>
  );
}

export default ProfileCircle;
