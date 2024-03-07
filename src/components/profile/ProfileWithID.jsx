import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProfilePicturePost from './ProfilePicturePost';

export default function ProfileWithID() {
  const [profile, setProfile] = useState({})
  const { id } = useParams();



  useEffect(() => {
      fetch(`https://boolean-api-server.fly.dev/giarreh/contact/${id}`)
      .then(response => response.json())
      .then(data => setProfile(data))
  }, [id])



  return (
    <div>
      <h1 className='profileHeader' onClick={() => console.log(profile)}>Profile</h1>
      <div className='profile'>
        <div className='profileTop'>
          {profile && ( // Check if profile is defined
            <>
              <ProfilePicturePost initials={`${profile.firstName?.[0]}${profile.lastName?.[0]}`} color={profile.favouriteColour} />
              <div>
                <div className='profileTopText'>
                  <h1>{profile.firstName} {profile.lastName}</h1>
                </div>
              </div>
            </>
          )}
        </div>
        <div className='profileContent'>
          <div>
            <div>
              <h2>Account Details</h2>
            </div>
            <hr/>

            <div>
              <div className='profileTextDetails'>
                <p>Email: {profile.email}</p>
                <p>Job Title: {profile.jobTitle}</p>
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
                <p>Street: {profile.street}</p>
                <p>City: {profile.city}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

