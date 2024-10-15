import { useContext } from "react"
import { ProfileContext } from "./Profile"

function AccountInfo(){
    const {profile, setProfile} = useContext(ProfileContext)
    return(
        <div className="profileForm">
            <label>First Name*</label>
            <input 
                type="text" 
                id="firstname"
                name="firstname"
                onChange={(e) => setProfile({...profile, firstname: e.target.value})}
                value={profile.firstname}
            />
            <label>Last Name*</label>
            <input
                type="text"
                id="lastname"
                name="lastname"
                onChange={(e) => setProfile({...profile, lastname: e.target.value})}
                value={profile.lastname}
            />
            <label>Username*</label>
            <input
                type="text"
                id="username"
                name="username"
                onChange={(e) => setProfile({...profile, username: e.target.value})}
                value={profile.username}
            />
            <label>Email*</label>
            <input
                type="text"
                id="email"
                name="email"
                onChange={(e) => setProfile({...profile, email: e.target.value})}
                value={profile.email}
            />
        </div>
    )
}

export default AccountInfo