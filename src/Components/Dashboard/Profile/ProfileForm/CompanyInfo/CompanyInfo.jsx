import PropTypes from "prop-types"
import "./CompanyInfo.css"

function CompanyInfo({ user, handleChange }) {
  return (
    <div className="company-info">
        <h3>Company Info</h3>
        <label>Job Title</label>
        <input value={user.jobTitle} name="jobTitle" onChange={handleChange}/>
    </div>
  )
}

CompanyInfo.propTypes = {
    user: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default CompanyInfo
