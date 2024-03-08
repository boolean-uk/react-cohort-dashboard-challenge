import PropTypes from "prop-types"
import "./ContactInfo.css"

function ContactInfo({ user, handleChange }) {
  return (
    <div className="contact-info">
        <h3>Contact Info</h3>
        <label>Email</label>
        <input value={user.email} name="email" onChange={handleChange}/>
    </div>
  )
}

ContactInfo.propTypes = {
  user: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default ContactInfo
