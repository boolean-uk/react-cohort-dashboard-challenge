import PropTypes from "prop-types"
import "./AccountInfo.css"

function AccountInfo({ user, handleChange }) {
  return (
    <div className="account-info">
        <h3>Account Info</h3>
        <label>First Name</label>
        <input value={user.firstName} name="firstName" onChange={handleChange}/>
        <label>Last Name</label>
        <input value={user.lastName} name="lastName" onChange={handleChange}/>
        <label>Gender</label>
        <input value={user.gender} name="gender" onChange={handleChange}/>
        <label>Favourite Color</label>
        <input value={user.favouriteColour} name="favouriteColour" onChange={handleChange}/>
  </div>
  )
}

AccountInfo.propTypes = {
    user: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default AccountInfo
