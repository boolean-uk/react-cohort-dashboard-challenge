import { useState } from "react";
import "./styles.css"

export default function UserForm({user, updateUserInfo}) {
    const [userData, setUserData] = useState(user);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        
        updateUserInfo(userData)
      };

    return (
        <form onSubmit={handleSubmit}>
        <div className="user-form">
        <div>
            <h2>Account Info</h2>
            <label>
                First Name*
                <input type="text" name="firstName" onChange={handleChange} value={userData.firstName} />
            </label>
            <label>
                Last Name*
                <input type="text" name="lastName" onChange={handleChange} value={userData.lastName} />
            </label>
            <label>
                Email*
                <input type="email" name="email" onChange={handleChange} value={userData.email}/>
            </label>
            <label>
                Gender
                <input type="text" name="gender" onChange={handleChange} value={userData.gender} />
            </label>
        </div>
        <div>
            <h2>Location</h2>
            <label>
                Street
                <input type="text" name="street" onChange={handleChange} value={userData.street} />
            </label>
            <label>
                City
                <input type="text" name="city" onChange={handleChange} value={userData.city} />
            </label>
            <label>
                Latitude
                <input type="text" name="latitude" onChange={handleChange} value={userData.latitude}/>
            </label>
            <label>
                Longitude
                <input type="text" name="longitude" onChange={handleChange} value={userData.longitude}/>
            </label>
        </div>
        <div>
            <h2>Account visuals</h2>
            <label>
                Favourite Colour
                <input type="color" name="favouriteColour" onChange={handleChange} value={userData.favouriteColour}/>
            </label>
            <label>
                Profile Image Link
                <input type="text" name="profileImage" onChange={handleChange} value={userData.profileImage}/>
            </label>
        </div>
        <div>
            <h2>Work info</h2>
            <label>
                Job Title
                <input type="text" name="jobTitle" onChange={handleChange} value={userData.jobTitle}/>
            </label>
        </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <input className="user-form-submit" type="submit" value="Save"/>
        </div>
      </form>
    )
}