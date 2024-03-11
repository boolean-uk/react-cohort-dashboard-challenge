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

function ProfileForm({ formUser, setFormUser }) {
    const { contacts, setContacts } = useContext(ContactContext)
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault()
        
        const putRequest = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formUser)
        }
    
        let result = await fetch("https://boolean-api-server.fly.dev/kristianverduin/contact/" + formUser.id, putRequest).then(res => res.json())
        setUser(result)
        setContacts([result, ...contacts])
        navigate("/")
      }
    
      function handleChange(event) {
        const { name, value } = event.target
        setFormUser({...formUser, [name]: value})
      }

  return (
    <form className="profile-content-form" onSubmit={handleSubmit}>
    <div className="top-row">
      <AccountInfo user={formUser} handleChange={handleChange} />
      <Address user={formUser} handleChange={handleChange} />
    </div>
    <div className="bottom-row">
      <ContactInfo user={formUser} handleChange={handleChange} />
      <CompanyInfo user={formUser} handleChange={handleChange} />
    </div>
    <button className="save-button" type="submit">Save</button>
</form>
  )
}

ProfileForm.propTypes = {
    formUser: PropTypes.object.isRequired,
    setFormUser: PropTypes.func.isRequired
}

export default ProfileForm
