import React, { useState } from 'react';
import ProfilePicture from './ProfilePicture';
import '../styles/profile.css'
import { Button, TextField } from '@mui/material';

const Profile = () => {

  const [profileForm, setProfileForm] = useState({
    firstName: "Øystein",
    lastName: "Haugen",
    userName: "",
    email: "",
    street: "",
    suite: "",
    city: "",
    zipCode: "",
    phoneNo: 0,
    website: "",
    companyName: "",
    catchPhrase: "",
    statement: "",
  })
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
                defaultValue={profileForm.firstName}
                size='small'
                fullWidth
              />
              <TextField
                required
                id="filled-required"
                label="Last Name"
                defaultValue={profileForm.lastName}
                size='small'
                fullWidth
              />
              <TextField
                required
                id="filled-required"
                label="Username"
                defaultValue={profileForm.userName}
                size='small'
                fullWidth
              />
              <TextField
                required
                id="filled-required"
                label="Email"
                defaultValue={profileForm.email}
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
                defaultValue={profileForm.street}
                size='small'
                fullWidth
              />
              <TextField
                id="filled"
                label="Suite"
                defaultValue={profileForm.suite}
                size='small'
                fullWidth
              />
              <TextField
                id="filled"
                label="City"
                defaultValue={profileForm.city}
                size='small'
                fullWidth
              />
              <TextField
                id="filled"
                label="Zipcode"
                defaultValue={profileForm.zipCode}
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
                defaultValue={profileForm.phoneNo}
                size='small'
                fullWidth
              />
              <TextField
                id="filled"
                label="Website"
                defaultValue={profileForm.website}
                size='small'
                fullWidth
              />
            </div>
          </div>
          <div className='profile-form-group'>
            <hr />
            <h1>Company info</h1>
            <div className='company-fomr'>
              <TextField
                id="filled"
                label="Name"
                defaultValue={profileForm.companyName}
                size='small'
                fullWidth
              />
              <TextField
                id="filled"
                label="Catch Phrase"
                defaultValue={profileForm.catchPhrase}
                size='small'
                fullWidth
              />
              <TextField
                id="filled"
                label="Business Statement"
                defaultValue={profileForm.statement}
                size='small'
                fullWidth
              />
            </div>
          </div>
        </div>
        <div className='form-footer'>
          <Button>Save</Button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
