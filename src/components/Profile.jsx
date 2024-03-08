import React, { useContext, useState } from 'react';
import ProfilePicture from './ProfilePicture';
import '../styles/profile.css'
import { Button, TextField } from '@mui/material';
import { useParams } from 'react-router-dom';
import { PostContext } from '../App';

const Profile = () => {
  const profileId = useParams()

  const {contacts, setContacts } = useContext(PostContext)

  const contact = contacts.find(contact => contact.id == profileId.id)

  const [profileForm, setProfileForm] = useState({
    firstName: contact.firstName,
    lastName: contact.lastName, 
    gender: contact.gender,
    email: contact.email,
    street: contact.street,
    city: contact.city,
    latitude: contact.latitude,
    longtitude: contact.longitude,
    favouriteColour: contact.favouriteColour,
  })

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setProfileForm(values => ({ ...values, [name]: value }))
  }



  async function UpdateProfile() {
    const response = await fetch(`https://boolean-api-server.fly.dev/oysteinbjo/contact/${contact.id}`
      , {
        method: "PUT",
        body: JSON.stringify(profileForm),
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      setContacts([...contacts, contacts[contact.id] = data])
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    UpdateProfile()
  }

  return (
    <div className='profile'>
      <h1>Profile</h1>
      <div className='profile-container'>
        <div className='profile-header'>
          <ProfilePicture firstName={contact.firstName} lastName={contact.lastName} favouriteColour={contact.favouriteColour} />
          <h2>{profileForm.firstName} {profileForm.lastName}</h2>
        </div>
        <div className='profile-form'>
          <div className='profile-form-group'>
            <hr />
            <h1>Personal info</h1>
            <div className='form'>
              <TextField
                required
                id="filled-required"
                label="First Name"
                name='firstName'
                value={profileForm.firstName}
                onChange={handleChange}
                size='small'
                variant='filled'
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
                variant='filled'
                fullWidth
              />
              <TextField
                required
                id="filled-required"
                label="Gender"
                name='gender'
                value={profileForm.gender}
                onChange={handleChange}
                size='small'
                variant='filled'
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
                variant='filled'
                fullWidth
              />
            </div>
          </div>
          <div className='profile-form-group'>
            <hr />
            <h1>Address</h1>
            <div className='form'>
              <TextField
                id="filled"
                label="Street"
                name='street'
                value={profileForm.street}
                onChange={handleChange}
                size='small'
                variant='filled'
                fullWidth
              />
              <TextField
                id="filled"
                label="City"
                name='city'
                value={profileForm.city}
                onChange={handleChange}
                size='small'
                variant='filled'
                fullWidth
              />
              <TextField
                id="filled"
                label="Latitude"
                name='latitude'
                value={profileForm.latitude}
                onChange={handleChange}
                size='small'
                variant='filled'
                fullWidth
              />
              <TextField
                id="filled"
                label="Longtitude"
                name='longtitude'
                value={profileForm.longtitude}
                onChange={handleChange}
                size='small'
                variant='filled'
                fullWidth
              />
            </div>
          </div>
          <div className='profile-form-group'>
            <hr />
            <h1>Misc Info</h1>
            <div className='form'>
              <TextField
                required
                id="filled-required"
                label="Favorite Color"
                name='favouriteColour'
                value={profileForm.favouriteColour}
                onChange={handleChange}
                size='small'
                variant='filled'
                fullWidth
              />
            </div>
          </div>
        <div className='form-footer'>
          <Button 
            onClick={handleSubmit}
              variant='contained'
              sx={{
                background: '#000046',
                ":hover": {
                  background: '#64dc78'
                }
              }}
            >Save</Button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
