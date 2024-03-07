import "./../styles.css"

function ProfileCircle({user}) {
  
  console.log(user)
  const getInitials = (firstName, lastName) => {
    return (
      (firstName ? firstName[0] : "") +
      (lastName ? lastName[0] : "")
    ).toUpperCase();
  }

  const circleStyle = {
    backgroundColor: user.favouriteColour, // Set your desired background color
  };

  return (
    <div className="profile-circle" style={circleStyle}>
      <span className="initials">
        <p>{getInitials(user.firstName, user.lastName)}</p>
      </span>
    </div>
  )
}

export default ProfileCircle