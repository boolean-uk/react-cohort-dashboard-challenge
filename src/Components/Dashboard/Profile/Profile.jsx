import { useContext, useState } from "react"
import ProfilePicture from "../../ProfilePicture/ProfilePicture"
import "./Profile.css"
import { ContactContext } from "../Dashboard"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { UserContext } from "../../../App"

function Profile() {
  const { contacts, getContacts } = useContext(ContactContext)
  const { getUser } = useContext(UserContext)
  const { id } = useParams()
  const [user, setUser] = useState(contacts.find(c => c.id == id))
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
    <div className='profile'>
      <div className='profile-header'>
        <h1>Profile</h1>
      </div>
      <div className='profile-content'>
        <div className="profile-content-header">
            <ProfilePicture user={user} />
            <h2>{user.firstName} {user.lastName}</h2>
        </div>
        <form className="profile-content-form" onSubmit={handleSubmit}>
            <div className="top-row">
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
            </div>
            <div className="bottom-row">
              <div className="contact-info">
                <h3>Contact Info</h3>
                <label>Email</label>
                <input value={user.email} name="email" onChange={handleChange}/>
              </div>
              <div className="company-info">
                <h3>Company Info</h3>
                <label>Job Title</label>
                <input value={user.jobTitle} name="jobTitle" onChange={handleChange}/>
              </div>
            </div>
            <button className="save-button" type="submit">Save</button>
        </form>
      </div>
    </div>
  )
}

export default Profile
