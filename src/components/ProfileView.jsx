import React, { useState } from 'react';

import '../styles/ProfileView.css'

const ProfileView = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [jobTitle, setJobTitle] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleStreetChange = (e) => {
    setStreet(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleJobTitleChange = (e) => {
    setJobTitle(e.target.value);
  };


  return(
    <div className="profile">
      <div className="profile-header">
        <h1>{firstName.charAt(0) + lastName.charAt(0)}</h1>
        <h2>{firstName} {lastName}</h2>
        <button>Edit</button>
      </div>
      <div className="profile-content">
        <div className="info-container">
        <div className="account-info">
              <h3>Account Info</h3>
              <label>
                First Name*
                <input type="text" value={firstName} onChange={handleFirstNameChange} />
              </label>
              <label>
                Last Name*
                <input type="text" value={lastName} onChange={handleLastNameChange} />
              </label>
              <div>
                <label>
                  Gender
                  <select value={gender} onChange={handleGenderChange}>
                    <option value="Woman">Woman</option>
                    <option value="Man">Man</option>
                    <option value="Other">Other</option>
                  </select>
                </label>
              </div>
              <div>
                <label>
                  Email*
                  <input type="email" value={email} onChange={handleEmailChange} />
                </label>
              </div>
            </div>
            <div className="address">
              <h3>Address</h3>
              <label>
                Street
                <input type="text" value={street} onChange={handleStreetChange} />
              </label>
              <label>
                City
                <input type="text" value={city} onChange={handleCityChange} />
              </label>
            </div>
          </div>
          <div className="company-info">
            <h3>Company Info</h3>
            <label>
              Job Title
              <input type="text" value={jobTitle} onChange={handleJobTitleChange} />
            </label>
        </div>
      </div>
    </div>
   )
};

export default ProfileView;
