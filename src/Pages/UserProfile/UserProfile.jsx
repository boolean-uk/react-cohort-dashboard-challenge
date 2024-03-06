import React, { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../../App';
import ProfilePicture from '../../globalComponents/profilePicture';
import './UserProfile.css'

function UserProfile() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const URL = "https://boolean-api-server.fly.dev/thegrevling/contact"


  // Local state to track changes
  const [editedUser, setEditedUser] = useState({});

  // Initialize editedUser when currentUser changes
  useEffect(() => {
    setEditedUser({ ...currentUser });
  }, [currentUser]);

  // Handle input changes
  const handleInputChange = (field, value) => {
    setEditedUser((prevUser) => ({
      ...prevUser,
      [field]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async () => {
    try {
      const response = await fetch(URL+`/${currentUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedUser),
      });

      if (response.ok) {
        // If the PUT request is successful, update the currentUser context
        setCurrentUser(editedUser);
        alert('Profile updated successfully!');
      } else {
        // Handle error cases
        alert('Error updating profile. Please try again.');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  


  if (!currentUser) return <p>Loading...</p>;

  return (
    <div className='profile-container'>
      <div className='profile-header'>
        <ProfilePicture firstName={currentUser.firstName} lastName={currentUser.lastName} favouriteColour={currentUser.favouriteColour} />
        {currentUser.firstName} {currentUser.lastName}
      </div>
      <div className='profile-edit-container'>
        <div className='profile-edit-inputs'>
          <h2>Account Info</h2>
          <div className='profile-edit-input'>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={editedUser.firstName || ""}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
            />
          </div>
          <div className='profile-edit-input'>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={editedUser.lastName || ""}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
            />
          </div>
          <div className='profile-edit-input'>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={editedUser.username || ""}
              onChange={(e) => handleInputChange('username', e.target.value)}
            />
          </div>
          <div className='profile-edit-input'>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              value={editedUser.email || ""}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
          </div>
        </div>
        <div className='profile-edit-inputs'>
          <h2>Address</h2>
          <div className='profile-edit-input'>
            <label htmlFor="street">Street:</label>
            <input
              type="text"
              id="street"
              value={editedUser.street || ""}
              onChange={(e) => handleInputChange('street', e.target.value)}
            />
          </div>
          <div className='profile-edit-input'>
            <label htmlFor="suite">Suite:</label>
            <input
              type="text"
              id="suite"
              value={editedUser.suite || ""}
              onChange={(e) => handleInputChange('suite', e.target.value)}
            />
          </div>
          <div className='profile-edit-input'>
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              value={editedUser.city || ""}
              onChange={(e) => handleInputChange('city', e.target.value)}
            />
          </div>
          <div className='profile-edit-input'>
            <label htmlFor="zipcode">Zipcode:</label>
            <input
              type="text"
              id="zipcode"
              value={editedUser.zipcode || ""}
              onChange={(e) => handleInputChange('zipcode', e.target.value)}
            />
          </div>
        </div>
        <div className='profile-edit-inputs'>
          <h2>Contact Info</h2>
          <div className='profile-edit-input'>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="text"
              id="phoneNumber"
              value={editedUser.phoneNumber || ""}
              onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
            />
          </div>
          <div className='profile-edit-input'>
            <label htmlFor="website">Website:</label>
            <input
              type="text"
              id="website"
              value={editedUser.website || ""}
              onChange={(e) => handleInputChange('website', e.target.value)}
            />
          </div>
        </div>
        <div className='profile-edit-inputs'>
          <h2>Company Info</h2>
          <div className='profile-edit-input'>
            <label htmlFor="companyName">Company Name:</label>
            <input
              type="text"
              id="companyName"
              value={editedUser.companyName || ""}
              onChange={(e) => handleInputChange('companyName', e.target.value)}
            />
          </div>
          <div className='profile-edit-input'>
            <label htmlFor="catchphrase">Catchphrase:</label>
            <input
              type="text"
              id="catchphrase"
              value={editedUser.catchphrase || ""}
              onChange={(e) => handleInputChange('catchphrase', e.target.value)}
            />
          </div>
          <div className='profile-edit-input'>
            <label htmlFor="businessStatement">Business Statement:</label>
            <input
              type="text"
              id="businessStatement"
              value={editedUser.businessStatement || ""}
              onChange={(e) => handleInputChange('businessStatement', e.target.value)}
            />
          </div>
        </div>
      </div>

      <button onClick={handleSubmit}>Save Changes</button>
    </div>
  );
}

export default UserProfile;
