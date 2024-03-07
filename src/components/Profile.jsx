import React, { useState } from 'react';
import ProfilePicture from './ProfilePicture';
import '../styles/profile.css'
import { Button, TextField } from '@mui/material';

const Profile = () => {

  const [profileForm, setProfileForm] = useState({
    firstName: JSON.parse(localStorage.getItem("firstName")) || "",
    lastName: JSON.parse(localStorage.getItem("lastName")) || "",
    userName: JSON.parse(localStorage.getItem("userName")) || "",
    email: JSON.parse(localStorage.getItem("email")) || "",
    street: JSON.parse(localStorage.getItem("street")) || "",
    suite: JSON.parse(localStorage.getItem("suite")) || "",
    city: JSON.parse(localStorage.getItem("city")) || "",
    zipCode: JSON.parse(localStorage.getItem("zipCode")) || "",
    phoneNo: JSON.parse(localStorage.getItem("phoneNo")) || 0,
    website: JSON.parse(localStorage.getItem("website")) || "",
    companyName: JSON.parse(localStorage.getItem("companyName")) || "",
    catchPhrase: JSON.parse(localStorage.getItem("catchPhrase")) || "",
    statement: JSON.parse(localStorage.getItem("statement")) || "",
  })

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    localStorage.setItem(name, JSON.stringify(value))
    setProfileForm(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div className='profile'>
      <h1>Profile</h1>
      <div className='profile-container'>
        <div className='profile-header'>
          <ProfilePicture firstName={"Øystein"} lastName={"Haugen"} favouriteColour={"Green"} />
          <h2>{profileForm.firstName} {profileForm.lastName}</h2>
        </div>
        <div className='profile-form'>
          <div className='profile-form-group'>
            <hr />
            <h1>Account info</h1>
            <div className='account-form'>
              <TextField
                required
                id="filled-required"
                label="First Name"
                name='firstName'
                value={profileForm.firstName}
                onChange={handleChange}
                size='small'
                fullWidth
              />
              <TextField
                required
                id="filled-required"
                label="Last Name"
                name='lastName'
                value={profileForm.lastName}
                onChange={handleChange}
                size='small'
                fullWidth
              />
              <TextField
                required
                id="filled-required"
                label="Username"
                name='userName'
                value={profileForm.userName}
                onChange={handleChange}
                size='small'
                fullWidth
              />
              <TextField
                required
                id="filled-required"
                label="Email"
                name='email'
                value={profileForm.email}
                onChange={handleChange}
                size='small'
                fullWidth
              />
            </div>
          </div>
          <div className='profile-form-group'>
            <hr />
            <h1>Address</h1>
            <div className='address-form'>
              <TextField
                id="filled"
                label="Street"
                name='street'
                value={profileForm.street}
                onChange={handleChange}
                size='small'
                fullWidth
              />
              <TextField
                id="filled"
                label="Suite"
                name='suite'
                defaultValue={profileForm.suite}
                value={profileForm.suite}
                onChange={handleChange}
                size='small'
                fullWidth
              />
              <TextField
                id="filled"
                label="City"
                name='city'
                value={profileForm.city}
                onChange={handleChange}
                size='small'
                fullWidth
              />
              <TextField
                id="filled"
                label="Zipcode"
                name='zipCode'
                value={profileForm.zipCode}
                onChange={handleChange}
                size='small'
                fullWidth
              />
            </div>
          </div>
          <div className='profile-form-group'>
            <hr />
            <h1>Contact Info</h1>
            <div className='contact-form'>
              <TextField
                required
                id="filled-required"
                label="Phone"
                name='phoneNo'
                value={profileForm.phoneNo}
                onChange={handleChange}
                size='small'
                fullWidth
              />
              <TextField
                id="filled"
                label="Website"
                name='website'
                value={profileForm.website}
                onChange={handleChange}
                size='small'
                fullWidth
              />
            </div>
          </div>
          <div className='profile-form-group'>
            <hr />
            <h1>Company info</h1>
            <div className='company-form'>
              <TextField
                id="filled"
                label="Name"
                name='companyName'
                value={profileForm.companyName}
                onChange={handleChange}
                size='small'
                fullWidth
              />
              <TextField
                id="filled"
                label="Catch Phrase"
                name='catchPhrase'
                value={profileForm.catchPhrase}
                onChange={handleChange}
                size='small'
                fullWidth
              />
              <TextField
                id="filled"
                label="Business Statement"
                name='statement'
                value={profileForm.statement}
                onChange={handleChange}
                size='small'
                fullWidth
              />
            </div>
          </div>
        </div>
        <div className='form-footer'>
          <Button onSubmit={handleSubmit}>Save</Button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
