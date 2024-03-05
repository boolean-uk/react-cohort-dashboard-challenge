import "./ProfileCircle.css";
function ProfileCircle({ user }) {
  if (!user) {
    return <div className="profile-circle">N/A</div>;
  }

  const firstNameLetter = user.firstName[0];
  const lastNameLetter = user.lastName[0];
  const color = user.favouriteColour;

  const circleColor = {
    "--profile-color": color,
  };
  return (
    <div className="profile-circle" style={circleColor}>
      {firstNameLetter}
      {lastNameLetter}
    </div>
  );
}

export default ProfileCircle;
