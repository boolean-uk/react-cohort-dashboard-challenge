import { useState } from "react"

function ProfileForm() {

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        phone: "",
        website: "",
        companyName: "",
        catchPhrase: "",
        businessStatement: ""
    })

    function handleChange(e) {
        const { name, value} = e.target
        setUserData({ ...userData, [name]: value})
    }

    console.log(userData)
    

    return (
        <form className="profile-form">
            <div className="account-info">
                <h2>Account Info</h2>
                <br />
                <label className="profile-label" htmlFor="firstName">First Name*</label>
                <input 
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={userData.firstName}
                    onChange={e => handleChange(e)}
                />
                <label className="profile-label" htmlFor="lastName"> Last Name*</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={userData.lastName}
                    onChange={e => handleChange(e)}
                />
                <label className="profile-label" htmlFor="username">UserName*</label>
                <input 
                    type="text"
                    id="username"
                    name="username"
                    value={userData.username}
                    onChange={e => handleChange(e)}
                />
                <label className="profile-label" htmlFor="email">Email*</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={userData.email}
                    onChange={e => handleChange(e)}
                />
            </div>
            <div className="address">
                <h2>Address</h2>
                <label className="profile-label" htmlFor="street">Street</label>
                <input 
                    type="text"
                    id="street"
                    name="street"
                    value={userData.street}
                    onChange={e => handleChange(e)}
                />
                <label className="profile-label" htmlFor="suite">Suite</label>
                <input 
                    type="text"
                    id="suite"
                    name="suite"
                    value={userData.suite}
                    onChange={e => handleChange(e)}
                />
                <label className="profile-label" htmlFor="city">City</label>
                <input 
                    type="text"
                    id="city"
                    name="city"
                    value={userData.city}
                    onChange={e => handleChange(e)}
                />
                <label className="profile-label" htmlFor="zipcode">Zipcode</label>
                <input 
                    type="text"
                    id="zipcode"
                    name="zipcode"
                    value={userData.zipcode}
                    onChange={e => handleChange(e)}
                />
            </div>
            <div className="contact-info">
                <h2>Contact info</h2>
                <label className="profile-label" htmlFor="phone">Phone*</label>
                <input 
                    type="text"
                    id="phone"
                    name="phone"
                    value={userData.phone}
                    onChange={e => handleChange(e)}
                />
                <label className="profile-label" htmlFor="website">Website</label>
                <input 
                    type="text"
                    id="website"
                    name="website"
                    value={userData.website}
                    onChange={e => handleChange(e)}
                />
            </div>
            <div className="company-info">
                <h2>Company info</h2>
                <label className="profile-label" htmlFor="companyName">Name</label>
                <input 
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={userData.companyName}
                    onChange={e => handleChange(e)}
                />
                <label className="profile-label" htmlFor="catchPhrase">Catch Phrase</label>
                <input 
                    type="text"
                    id="catchPhrase"
                    name="catchPhrase"
                    value={userData.catchPhrase}
                    onChange={e => handleChange(e)}
                />
                <label className="profile-label" htmlFor="businessStatement">Business Statement</label>
                <input 
                    type="text"
                    id="businessStatement"
                    name="businessStatement"
                    value={userData.businessStatement}
                    onChange={e => handleChange(e)}
                />
            </div>
            <button type="submit">Save</button>
        </form>
    )
}

export default ProfileForm