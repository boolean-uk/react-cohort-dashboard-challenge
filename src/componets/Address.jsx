import { useContext } from "react"
import { ProfileContext } from "./Profile"

function Address(){
    const {profile, setProfile} = useContext(ProfileContext)
    return(
    <div className="addressForm">
        <label>Street</label>
        <input 
            type="text" 
            id="street"
            name="street"
            onChange={(e) => setProfile({...profile, street: e.target.value})}
            value={profile.street}
        />
        <label>Suite</label>
        <input
            type="text"
            id="suite"
            name="suite"
            onChange={(e) => setProfile({...profile, suite: e.target.value})}
            value={profile.suite}
        />
        <label>City</label>
        <input
            type="text"
            id="city"
            name="city"
            onChange={(e) => setProfile({...profile, city: e.target.value})}
            value={profile.city}
        />
        <label>Zipcode</label>
        <input
            type="text"
            id="zipcode"
            name="zipcode"
            onChange={(e) => setProfile({...profile, zipcode: e.target.value})}
            value={profile.zipcode}
        />
    </div>
    )
}

export default Address