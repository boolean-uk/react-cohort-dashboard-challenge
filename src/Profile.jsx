import React, { useState } from 'react';
import './App.css';

function Profile() {
  const [profileData, setProfileData] = useState({
    firstName: 'Alex',
    lastName: 'Walker',
    username: 'AWalker',
    email: 'awalker@boolean.co.uk',
    phone: '07890 123456',
    website: 'https://boolean.co.uk',
    street: 'Kulas Light',
    suite: 'Suite 879',
    city: 'Wisokyburgh',
    zipcode: '90566-7771',
    companyName: 'Romaguera-Jacobson',
    catchPhrase: 'Face to face bifurcated interface',
    businessStatement: 'e-enable strategic applications',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile data saved:', profileData);
  };

  const initials = `${profileData.firstName.charAt(0)}${profileData.lastName.charAt(0)}`.toUpperCase();

  return (
    <div className="profile-container">
      <div className="user-logo">
        <div className="user-initials-logo">{initials}</div>
        <h2>{`${profileData.firstName} ${profileData.lastName}`}</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="profile-section">
          <div className="profile-group">
            <label>First Name*</label>
            <input
              type="text"
              name="firstName"
              value={profileData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="profile-group">
            <label>Last Name*</label>
            <input
              type="text"
              name="lastName"
              value={profileData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="profile-group">
            <label>Username*</label>
            <input
              type="text"
              name="username"
              value={profileData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="profile-group">
            <label>Email*</label>
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button type="submit" className="save-button" >Save</button>
      </form>
    </div>
  );
}

export default Profile;


