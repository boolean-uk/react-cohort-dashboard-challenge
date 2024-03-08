import { useContext, useState } from "react"
import ProfilePicture from "../../ProfilePicture/ProfilePicture"
import "./Profile.css"
import { ContactContext } from "../Dashboard"
import { useParams } from "react-router-dom"
import ProfileForm from "./ProfileForm/ProfileForm"

function Profile() {
  const { contacts } = useContext(ContactContext)
  const { id } = useParams()
  const [user, setUser] = useState(contacts.find(c => c.id == id))

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
        <ProfileForm user={user} setUser={setUser}/>
      </div>
    </div>
  )
}

export default Profile
