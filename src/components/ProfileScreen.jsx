import { useContext, useState } from "react"
import ColouredCircle from "./ColouredCircle"
import { UserContext } from "../App"
import "../styling/ProfileScreen.css"

const ProfileScreen = () => {
    const { userLoggedIn, setUser } = useContext(UserContext)
    const [profile, setProfile] = useState({
        firstName: "Rick",
        lastName: "Sanchez",
        street: "Morty Lane",
        city: "Jerryville",
        gender: "Male",
        email: "rick@sanchez.com",
        jobTitle: "Scientist",
        latitude: 42,
        longitude: 629,
        favouriteColour: "#0d7f26",
        profileImage: "https://www.gravatar.com/avatar/sdfa@fasdf.com?s=120&d=identicon"
      })

    const saveProfile = () => {
        console.log(profile)
        const url = "https://boolean-uk-api-server.fly.dev/PandersPanda/contact/" + userLoggedIn.id;
        console.log(url)
        fetch(url, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(profile), 
        })
        .then((response) => response.json())
        .then((data) => setUser(data))    
    }

    const onChange = (event) => {
        setProfile({...profile, [event.target.name]: event.target.value})
    }

    return (
        <div className="profile_container">
            <h1>Profile</h1>
            <div className = "profile_content">
                <div className="profile_header">
                    <ColouredCircle firstName={userLoggedIn.firstName} lastName={userLoggedIn.lastName} color={userLoggedIn.favouriteColour}/>
                    <h2 className="profile_name">{userLoggedIn.firstName} {userLoggedIn.lastName}</h2>
                </div>    
            
                <div className="form_section">
                    <h2>Account info</h2>
                    <div className="form_grid">
                        <div className="form_item">
                            <label>First Name*</label>
                            <input type="text" placeholder={userLoggedIn.firstName} onChange={onChange} name="firstName"/>
                        </div>
                        <div className="form_item">
                            <label>Last Name*</label>
                            <input type="text" placeholder={userLoggedIn.lastName}  onChange={onChange} name="lastName"/>
                        </div>
                        <div className="form_item">
                            <label>Email*</label>
                            <input type="text" placeholder={userLoggedIn.email}  onChange={onChange} name="email"/>
                        </div>
                    </div>
                </div>
                <div className="form_section">
                    <h2>Address</h2>
                    <div className="form_grid">
                        <div className="form_item">
                            <label>Street</label>
                            <input type="text" placeholder={userLoggedIn.street}  onChange={onChange} name="street"/>
                        </div>
                        <div className="form_item">
                            <label>City</label>
                            <input type="text" placeholder={userLoggedIn.city}  onChange={onChange} name="city"/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button className="save_button" onClick={saveProfile}>Save</button>
                </div>
                
            </div>
        </div>
    )
}

export default ProfileScreen