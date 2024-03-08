import { useContext, useState } from "react"
import { Context } from "../App"
import Avatar from "react-avatar";
import { useNavigate } from "react-router-dom";

function ProfileForm() {
    const { users, setUsers, userLoggedIn } = useContext(Context)
    const [profileInput, setProfileInput] = useState({...userLoggedIn})
    const navigate = useNavigate()
    
    function handleSubmit(event){
        event.preventDefault()

        fetch(
          `https://boolean-api-server.fly.dev/maha897/contact/${userLoggedIn.id}`, {
            method: "PUT", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(profileInput),
          }
        )
          .then((response) => response.json())
          .then((updatedUser) => {
            const updatedUsers = users.map((user) => user.id === updatedUser.id ? updatedUser : user)
            setUsers(updatedUsers)
            navigate("/")
          })
    }

    function handleChange(event){
        const { name, value } = event.target
        setProfileInput({ ... profileInput, [name]: value})
    }

    return (
      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="profile-details">
          <Avatar name={`${userLoggedIn.firstName} ${userLoggedIn.lastName}`} round={true} />
          <h3>{`${userLoggedIn.firstName} ${userLoggedIn.lastName}`}</h3>
        </div>
        <br />

        <div className="profile-form-account">
          <h2>Account info</h2>
          <label htmlFor="firstName">First Name*</label>
          <input
            name="firstName"
            value={profileInput.firstName}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="lastName">Last Name*</label>
          <input
            name="lastName"
            value={profileInput.lastName}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="userName">Username*</label>
          <input
            name="userName"
            value={profileInput.userName}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="email">Email*</label>
          <input
            type="email"
            name="email"
            value={profileInput.email}
            onChange={handleChange}
          />
          <br />
        </div>

        <div className="profile-form-address">
          <h2>Adress</h2>
          <label htmlFor="street">Street</label>
          <input
            name="street"
            value={profileInput.street}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="suite">Suite</label>
          <input
            name="suite"
            value={profileInput.suite}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="city">City</label>
          <input
            name="city"
            value={profileInput.city}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="zipcode">Zipcode</label>
          <input
            type="number"
            name="zipcode"
            value={profileInput.zipcode}
            onChange={handleChange}
          />
          <br />
        </div>

        <div className="profile-form-contact">
          <h2>Contact info</h2>
          <label htmlFor="phone">Phone*</label>
          <input
            type="number"
            name="phone"
            value={profileInput.phone}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="website">Website</label>
          <input
            name="website"
            value={profileInput.website}
            onChange={handleChange}
          />
          <br />
        </div>

        <div className="profile-form-company">
          <h2>Company info</h2>
          <label htmlFor="company">Name</label>
          <input
            name="company"
            value={profileInput.company}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="jobTitle">Title</label>
          <input
            name="jobTitle"
            value={profileInput.jobTitle}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="businessStatement">Business Statement</label>
          <input
            name="businessStatement"
            value={profileInput.businessStatement}
            onChange={handleChange}
          />
          <br />
        </div>
        <button type="submit">Save</button>
      </form>
    );
}

export default ProfileForm