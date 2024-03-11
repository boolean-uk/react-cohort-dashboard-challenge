import React from "react";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../App";

function ProfileForm() {
  const { user, setUser } = useContext(UserContext);
  const [profile, setProfile] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    street: user.street,
    city: user.city,
    jobTitle: user.jobTitle,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile({ ...profile, [name]: value });
    console.log(value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await updateUserProfile(profile);
      // Assuming the API returns the updated user data, update the user context
      setUser(response);
      console.log("User profile updated successfully:", response);
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };

  const updateUserProfile = async (updatedProfile) => {
    try {
      const response = await fetch('https://boolean-api-server.fly.dev/SebastianEngan/contact/1', {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProfile),
      });
      if (!response.ok) {
        throw new Error("Failed to update user profile");
      }
      return await response.json();
    } catch (error) {
      throw new Error("Error updating user profile:", error.message);
    }
  };
  return (
    <>
      <div className="profile-form">
        <form>
          <h3>Account Info</h3>
          <ul>
            <li>
              <label>
                <input
                  type="text"
                  name="firstName"
                  placeholder='First Name'
                  value={profile.firstName}
                  onChange={handleChange}
                />
              </label>
            </li>
            <li>
              <label>
                <input
                  type="text"
                  name="lastName"
                  placeholder='Last Name'
                  value={profile.lastName}
                  onChange={handleChange}
                />
              </label>
            </li>
            {/* <li>
              <label>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={profile.username}
                  onChange={handleChange}
                />
              </label>
            </li> */}
            <li>
              <label>
                <input
                  type="email"
                  name="email"
                  placeholder='Email'
                  value={profile.email}
                  onChange={handleChange}
                />
              </label>
            </li>
          </ul>
          <h3>Address</h3>
          <ul>
            <li>
              <label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  placeholder='Street'
                  value={profile.street}
                  onChange={handleChange}
                />
              </label>
            </li>
            {/* <li>
              <label>
                <input
                  type="text"
                  id="suite"
                  name="suite"
                  placeholder="suite"
                  value={profile.suite}
                  onChange={handleChange}
                />
              </label>
            </li> */}
            <li>
              <label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder='City'
                  value={profile.city}
                  onChange={handleChange}
                />
              </label>
            </li>
            {/* <li>
              <label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  placeholder="Zip code"
                  value={profile.zipCode}
                  onChange={handleChange}
                />
              </label>
            </li> */}
          </ul>
          <h3>Company Info</h3>
          <ul>
              <li>
                <label>
                  <input
                    type="text"
                    id="job-title"
                    name="jobTitle"
                    placeholder='Job title'
                    value={profile.jobTitle}
                    onChange={handleChange}
                  />
                </label>
              </li>
          </ul>
          <button onClick={handleSubmit}>Save</button>
        </form>
      </div>
    </>
  );
}

export default ProfileForm;
