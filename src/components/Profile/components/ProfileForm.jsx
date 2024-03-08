import {useState } from "react";
import PropTypes from "prop-types"
import "./../styles.css"

function ProfileForm({user, setUser}) {
  console.log(user)
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    userName: user.firstName.charAt(0) + user.lastName,
    email: user.email,

    street: user.street,
    city: user.city,

    id: user.id,
  });


  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
  };

  const submitForm = async(event) => {
    event.preventDefault()
    try {
      const res = await fetch(`https://boolean-api-server.fly.dev/AxelHan/contact/${user.id}`, {
          method: "PUT",
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(formData)
      })
      console.log(res.json)
      if(res.ok) {
          console.log("success contact updated")
          setUser((prevUser) => (
            { ...prevUser, 
            firstName: formData.firstName,
            lastName: formData.lastName, 
            userName: formData.userName, 
            email: formData.email ,
            street: formData.street ,
            city: formData.city  }));
      } else{
          console.error("Failed to update contact")
      }
  }
  catch (error){
      console.error('Error:', error)
  }

    
  };

  return (

    <div className="user-form-container">
      <form className="user-form">
        <div className="account-info">
          <h3>Account Info</h3>
          <div className="input-item">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" value={formData.firstName} onChange={handleChange} />
          </div>

          <div className="input-item">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" value={formData.lastName} onChange={handleChange} />
          </div>

          <div className="input-item">
            <label htmlFor="userName">Username:</label>
            <input type="text" id="userName" value={formData.userName} onChange={handleChange} />
          </div>

          <div className="input-item">
          <label htmlFor="email">Email adress:</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} />
          </div>

        </div>

        <div className="adress-info">
        <h3>Adress</h3>
        <div className="input-item">
          <label htmlFor="city">City:</label>
          <input type="text" id="city" value={formData.city} onChange={handleChange} />
        </div>

        <div className="input-item">
          <label htmlFor="street">Strees:</label>
          <input type="text" id="street" value={formData.street} onChange={handleChange} />
        </div>
        </div>
        <button type="button" className="savebtn" onClick={submitForm}>
          Save
        </button>
      </form>
    </div>

  );
}

ProfileForm.propTypes ={
  user: PropTypes.object,
  setUser: PropTypes.func
}

export default ProfileForm