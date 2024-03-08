import PropTypes from "prop-types"
import "./ProfilePicture.css"
import { Link } from "react-router-dom"

function ProfilePicture({ user }) {

  return (
    <Link to={`/profile/${user.id}`} className="profile-picture">
      <div className='profile-picture' style={{background: user.favouriteColour}}>
        <p>{user.firstName[0].toUpperCase() + user.lastName[0].toUpperCase()}</p>
      </div>
    </Link>
  )
}

ProfilePicture.propTypes = {
    user: PropTypes.object.isRequired
}

export default ProfilePicture
