import { useState } from "react";
import ProfileIcon from "./Header/ProfileIcon";

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  city: "",
  street: "",
  gender: "",
  email: "",
  jobTitle: "",
  userName: "",
  suite: "",
  city: "", 
  zip: "",
  phone: "",
  website: "",
  companyName: "",
  catchPhrase: "",
  businessStatement: "",
};

export default function ProfileForm() {
  const [updateUser, setUpdateUser] = useState(INITIAL_STATE)
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdateUser({ ...updateUser, [name]: value });
  };  

  const handleSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateUser),
    };

    fetch(`https://boolean-api-server.fly.dev/loza01/contact/1`, options)
      .then((res) => res.json())
      .then(() => {
        // Use a function to set the new state based on the previous state
        setUpdateUser(INITIAL_STATE);
      });

    const form = event.target;
    form.reset();
  };

  console.log



  return (
    <div className="profile-form">
      <h1>Profile</h1>
      <div className="userProfileName">
      <ProfileIcon />
      <h2>Alex Walker</h2>
      </div>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="account-info">
          <h3>Account Info</h3>
          <label>First Name</label>
          <input type="text" name="firstName" value={updateUser.firstName} onChange={(e) => handleChange(e)} placeholder="First Name" />
          <label>Last Name</label>
          <input type="text" name="lastName" value={updateUser.lastName} onChange={(e) => handleChange(e)} placeholder="Last Name" />
          <label>Username</label>
          <input type="text" name="userName" value={updateUser.userName} onChange={(e) => handleChange(e)} placeholder="Username" />
          <label>Email</label>
          <input type="text" name="email" value={updateUser.email} onChange={(e) => handleChange(e)} placeholder="Email" />
        </div>
        <div className="address-info">
          <h3>Address </h3>
          <label>Street</label>
          <input type="text" name="street" value={updateUser.street} onChange={(e) => handleChange(e)} placeholder="street" />
          <label>Suite</label>
          <input type="text" name="suite" value={updateUser.suite} onChange={(e) => handleChange(e)}placeholder="Suite" />
          <label>City</label>
          <input type="text" name="city" value={updateUser.city} onChange={(e) => handleChange(e)} placeholder="City" />
          <label>Zip</label>
          <input type="text" name="zip" value={updateUser.zip} onChange={(e) => handleChange(e)} placeholder="Zip" />
        </div>
        <div className="contact-info">
          <h3>Contact Info</h3>
          <label>Phone*</label>
          <input type="text" name="phone" value={updateUser.phone} onChange={(e) => handleChange(e)} placeholder="Phone" />
          <label>Website</label>
          <input type="text" name="website" value={updateUser.website} onChange={(e) => handleChange(e)} placeholder="Website" />
        </div>
        <div className="company-info">
          <h3>Company Info</h3>
          <label>Name</label>
          <input type="text" name="companyName" value={updateUser.companyName} onChange={(e) => handleChange(e)} placeholder="CompanyName" />
          <label>Catch Phrase</label>
          <input type="text" name="catchPhrase" value={updateUser.catchPhrase} onChange={(e) => handleChange(e)} placeholder="Catch Phrase" />
          <label>Business Statement</label>
          <input type="text" name="businessStatement" value={updateUser.businessStatement} onChange={(e) => handleChange(e)} placeholder="Business Statement" />
        </div>
        <input className="btn" type="submit" value="SAVE"  />
      </form>
    </div>
  );
}