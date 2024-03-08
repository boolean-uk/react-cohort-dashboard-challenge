import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProfilePicturePost from './ProfilePicturePost';
import { UserContext } from '../../contexts/UserContext';

export default function ProfileWithID() {
  const [profile, setProfile] = useState({})

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    street: '',
    city: '',
    favouriteColour: ''
  })

  const user = useContext(UserContext)

  const { id } = useParams();


  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setForm((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://boolean-api-server.fly.dev/giarreh/contact/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then(response => response.json())
      .then(data => {console.log(data); setProfile(data);})
      .catch(error => console.error('Error updating profile:', error));
  }


  useEffect(() => {
      fetch(`https://boolean-api-server.fly.dev/giarreh/contact/${id}`)
      .then(response => response.json())
      .then(data => {
        setProfile(data);
        setForm(data);
      })
  }, [id])



  return (
    <div>
      <h1 className='profileHeader' onClick={() => console.log(profile)}>Profile</h1>
      <div className='profile'>
        <div className='profileTop'>
          <ProfilePicturePost initials={`${profile.firstName?.[0]}${profile.lastName?.[0]}`} color={profile.favouriteColour} />
          <div>
            <div className='profileTopText'>
              <h1>{profile.firstName} {profile.lastName}</h1>
            </div>
          </div>
        </div>
        <div className='profileContent'>
          <div>
            <div>
              <h2>Account Details</h2>
            </div>
            <hr/>

            <div>
              <div className='profileTextDetails'>
                <div>
                  <p>First name:</p>
                  <input className='profileInput main-background' value={form.firstName} onChange={handleChangeInput} name='firstName' ></input>
                </div>
                <div>
                  <p>Last name:</p>
                  <input className='profileInput main-background' value={form.lastName} onChange={handleChangeInput} name='lastName'></input>
                </div>
                <div>
                  <p>Email:</p>
                  <input className='profileInput main-background' name='email' value={form.email} onChange={handleChangeInput}/>
                </div>
                <div>
                  <p>Job title:</p>
                  <input className='profileInput main-background' value={form.jobTitle} onChange={handleChangeInput} name='jobTitle'></input>
                </div>
                <div>
                  <p>Favourite colour:</p>
                  <input className='profileInput main-background' value={form.favouriteColour} onChange={handleChangeInput}name='favouriteColour'></input>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2>Address</h2>
              <hr/>
            </div>
            <div>
              <div className='profileTextDetails'>
                <div>
                  <p>Street:</p>
                  <input className='profileInput main-background' value={form.street} onChange={handleChangeInput} name='street' ></input>
                </div>
                <div>
                  <p>City:</p>
                  <input className='profileInput main-background' value={form.city} onChange={handleChangeInput} name='city' ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='profileSaveButton' onClick={handleSubmit} >Save</div>
        </div>
    </div>
  );
  
}

