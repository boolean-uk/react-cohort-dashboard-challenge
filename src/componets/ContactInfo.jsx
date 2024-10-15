import { useContext } from "react"
import { ProfileContext } from "./Profile"
function ContactInfo(){
    const { profile, setProfile } = useContext(ProfileContext) 
    return(
        <div className="contactInfoForm">
        <label>Phone*</label>
        <input 
            type="tel" 
            id="phone"
            name="phone"
            onChange={(e) => setProfile({...profile, phone: e.target.value})}
            value={profile.phone}
        />
        <label>Website*</label>
        <input
            type="text"
            id="website"
            name="website"
            onChange={(e) => setProfile({...profile, website: e.target.value})}
            value={profile.website}            
        />
    </div>
    )
}

export default ContactInfo