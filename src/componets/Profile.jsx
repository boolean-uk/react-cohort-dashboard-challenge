import { LoginContext } from "../App"
import { createContext, useContext, useState } from "react"
import AccountInfo from "./AccountInfo"
import Address from "./Address"
import CompanyInfo from "./CompanyInfo"
import ContactInfo from "./ContactInfo"
export const ProfileContext = createContext()

function Profile(){
    const { user } = useContext(LoginContext)
    const initialProfile = {
        id: user.id,
        firstname: user.firstName,
        lastname: user.lastName,
        username: "",
        email: user.email,
        street: user.street,
        suite: "",
        city: user.city,
        zipcode: "",
        phone: "",
        website: "",
        companyname: "",
        catchPhrase: "",
        statement: ""
    }
    const [profile, setProfile] = useState(initialProfile)
    const handleSubmit = (event) => {
        event.preventDefault() 
    }


    return(
        <div className="profilePage">
            
                <form onSubmit={handleSubmit}>
                    <ProfileContext.Provider 
                        value={{profile: profile, setProfile: setProfile}}
                    >
                        <AccountInfo/>
                        <Address/>
                        <ContactInfo/>
                        <CompanyInfo/>
                    </ProfileContext.Provider>
                    <button type="submit">Post</button>
                </form>
            
        </div>
    )
}

export default Profile