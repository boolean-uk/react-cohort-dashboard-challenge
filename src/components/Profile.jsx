import { useContext, useState, useEffect } from "react";
import { DataContext } from "../App";
import Avatar from "./Avatar";
import TextInput from "./TextInput";

export default function Profile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");

  const { mode } = useContext(DataContext);

  function handleFormSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className={`profile-container ${mode}`}>
      <h1 className="profile-heading">Profile</h1>

      <div className="profile">
        <div className={`profile-header ${mode}`}>
          <Avatar />
          <h2>User Name</h2>
        </div>

        <form action="" className="profile-form" onSubmit={handleFormSubmit}>
          <div className="account-info">
            <h2>Account info</h2>
            <label htmlFor="first-name" className={mode}>
              First Name*
            </label>
            <TextInput
              id="first-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="last-name" className={mode}>
              Last Name*
            </label>
            <TextInput
              id="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="gender" className={mode}>
              Gender
            </label>
            <TextInput
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="job-title" className={mode}>
              Job Title
            </label>
            <TextInput
              id="job-title"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </div>

          <div className="address">
            <h2>Address</h2>
            <label htmlFor="street" className={mode}>
              Street*
            </label>
            <TextInput
              id="street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
            <label htmlFor="city" className={mode}>
              City*
            </label>
            <TextInput
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="contact-info">
            <h2>Contact info</h2>
            <label htmlFor="contact-info" className={mode}>
              Email
            </label>
            <TextInput
              id="contact-info"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="save">
            <button>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
