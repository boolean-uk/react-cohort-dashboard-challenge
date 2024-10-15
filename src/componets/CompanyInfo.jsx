import { useContext } from "react"
import { ProfileContext } from "./Profile"


function CompanyInfo(){
    const { profile, setProfile } = useContext(ProfileContext) 
    return(
        <div className="companyInfoForm">
        <label>Name</label>
        <input 
            type="text" 
            id="companyname"
            name="companyname"
            onChange={(e) => setProfile({...profile, companyname: e.target.value})}
            value={profile.companyname}
        />
        <label>Catch Phrase</label>
        <input
            type="text"
            id="catchPhrase"
            name="catchPhrase"
            onChange={(e) => setProfile({...profile, catchPhrase: e.target.value})}
            value={profile.catchPhrase}
        />
        <label>Business Statement</label>
        <input
            type="text"
            id="statement"
            name="statement"
            onChange={(e) => setProfile({...profile, statement: e.target.value})}
            value={profile.statement}
        />
    </div>
    )
}

export default CompanyInfo