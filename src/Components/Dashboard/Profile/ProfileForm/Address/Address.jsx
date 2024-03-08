import PropTypes from "prop-types"
import "./Address.css"

function Address({ user, handleChange }) {
  return (
    <div className="address">
        <h3>Address</h3>
        <label>Street</label>
        <input value={user.street} name="street" onChange={handleChange}/>
        <label>City</label>
        <input value={user.city} name="city" onChange={handleChange}/>
        <label>Latitude</label>
        <input value={user.latitude} name="latitude" onChange={handleChange}/>
        <label>Longitude</label>
        <input value={user.longitude} name="longitude" onChange={handleChange}/>
    </div>
  )
}

Address.propTypes = {
    user: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default Address
