import "./../styles.css"
import PropTypes from "prop-types"

function ProfileCircle({user}) {
  
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


ProfileCircle.propTypes = {

  user: PropTypes.object

}

export default ProfileCircle