import PropTypes from "prop-types"
import "./../styles.css"
import ProfileCircle from "./ProfileCircle"

function ProfileInfo({user}) {
  return (
    <div>
      <div className="user-info">
        <h2>User Information</h2>
        <ProfileCircle user={user}></ProfileCircle>
        <div className="info-item">
          <span className="label">First Name:</span>
          <span className="value">{user.firstName}</span>
        </div>
        <div className="info-item">
          <span className="label">Last Name:</span>
          <span className="value">{user.lastName}</span>
        </div>
        <div className="info-item">
          <span className="label">Username:</span>
          <span className="value">{user.firstName.charAt(0) + user.lastName}</span>
        </div>
        <div className="info-item">
          <span className="label">Email:</span>
          <span className="value">{user.email}</span>
        </div>
        <div className="info-item">
          <span className="label">Street:</span>
          <span className="value">{user.street}</span>
        </div>
        <div className="info-item">
          <span className="label">City:</span>
          <span className="value">{user.city}</span>
        </div>
      </div>
    </div>
  )
}


ProfileInfo.propTypes ={
  user: PropTypes.object
}

export default ProfileInfo