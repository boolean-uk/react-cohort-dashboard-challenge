import PropTypes from "prop-types"

function ProfilePicture({ user }) {

  return (
    <div className='profile-picture' style={{background: user.favouriteColour}}>
      <p>{user.firstName[0].toUpperCase() + user.lastName[0].toUpperCase()}</p>
    </div>
  )
}

ProfilePicture.propTypes = {
    user: PropTypes.object.isRequired
}

export default ProfilePicture
