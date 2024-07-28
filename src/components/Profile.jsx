import React, { useState, useEffect } from 'react';
import './Profile.css';

function Profile() {
  const [profile, setProfile] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/contacts/1')
      .then(response => response.json())
      .then(data => {
        setProfile(data);
        setFormData(data);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    fetch(`https://boolean-uk-api-server.fly.dev/contacts/1`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      setProfile(data);
      setEditMode(false);
    });
  };

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <div className="profile-header">
        <div className="profile-avatar">
          <span>{profile.name?.charAt(0)}</span>
        </div>
        <h2>{profile.name}</h2>
      </div>
      <div className="profile-content">
        <div className="profile-section">
          <h3>Account info</h3>
          <div className="profile-info">
            <label>First Name</label>
            <input name="name" value={formData.name} onChange={handleChange} />
            <label>Last Name</label>
            <input name="lastName" value={formData.lastName} onChange={handleChange} />
            <label>Username</label>
            <input name="username" value={formData.username} onChange={handleChange} />
            <label>Email</label>
            <input name="email" value={formData.email} onChange={handleChange} />
          </div>
        </div>
        <div className="profile-section">
          <h3>Address</h3>
          <div className="profile-info">
            <label>Street</label>
            <input name="address.street" value={formData.address?.street} onChange={handleChange} />
            <label>Suite</label>
            <input name="address.suite" value={formData.address?.suite} onChange={handleChange} />
            <label>City</label>
            <input name="address.city" value={formData.address?.city} onChange={handleChange} />
            <label>Zipcode</label>
            <input name="address.zipcode" value={formData.address?.zipcode} onChange={handleChange} />
          </div>
        </div>
        <div className="profile-section">
          <h3>Contact info</h3>
          <div className="profile-info">
            <label>Phone</label>
            <input name="phone" value={formData.phone} onChange={handleChange} />
            <label>Website</label>
            <input name="website" value={formData.website} onChange={handleChange} />
          </div>
        </div>
        <div className="profile-section">
          <h3>Company info</h3>
          <div className="profile-info">
            <label>Name</label>
            <input name="company.name" value={formData.company?.name} onChange={handleChange} />
            <label>Catch Phrase</label>
            <input name="company.catchPhrase" value={formData.company?.catchPhrase} onChange={handleChange} />
            <label>Business Statement</label>
            <input name="company.bs" value={formData.company?.bs} onChange={handleChange} />
          </div>
        </div>
        <button className="save-button" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

export default Profile;
