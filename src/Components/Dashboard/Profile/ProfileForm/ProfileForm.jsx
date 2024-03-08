import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../../../App'
import { ContactContext } from '../../Dashboard'
import AccountInfo from './AccountInfo/AccountInfo'
import Address from './Address/Address'
import ContactInfo from './ContactInfo/ContactInfo'
import CompanyInfo from './CompanyInfo/CompanyInfo'
import PropTypes from "prop-types"
import "./ProfileForm.css"

function ProfileForm({ user, setUser }) {
    const { getContacts } = useContext(ContactContext)
    const { getUser } = useContext(UserContext)
    const navigate = useNavigate()


    async function handleSubmit(event) {
        event.preventDefault()
        
        const putRequest = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }
    
        await fetch("https://boolean-api-server.fly.dev/kristianverduin/contact/" + user.id, putRequest)
        await getContacts()
        await getUser()
        navigate("/")
      }
    
      function handleChange(event) {
        const { name, value } = event.target
        setUser({...user, [name]: value})
      }

  return (
    <form className="profile-content-form" onSubmit={handleSubmit}>
    <div className="top-row">
      <AccountInfo user={user} handleChange={handleChange} />
      <Address user={user} handleChange={handleChange} />
    </div>
    <div className="bottom-row">
      <ContactInfo user={user} handleChange={handleChange} />
      <CompanyInfo user={user} handleChange={handleChange} />
    </div>
    <button className="save-button" type="submit">Save</button>
</form>
  )
}

ProfileForm.propTypes = {
    user: PropTypes.object.isRequired,
    setUser: PropTypes.func.isRequired
}

export default ProfileForm
