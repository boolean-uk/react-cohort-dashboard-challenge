import React, { useContext, useEffect, useState } from 'react'
import './profile.css'
import { UserContext } from '../../App'
import { ApiContext } from '../../contexts/apiprovider'

const ProfileComponent = () => {
  const { user } = useContext(UserContext)
  
  const { PutContact } = useContext(ApiContext)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    street: "",
    city: ""
  })

  useEffect(()=> {
    setFormData(user)
  }, [])

  function handleSubmit(event){
    event.preventDefault()
    if(formData.firstName !== "" && formData.lastName !== "" && formData.email !== "" ) {
      PutContact(formData, user.id)
    }
    console.log(formData)
  }

  function handleInput(event){
    setFormData(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }

    return (
      <>

        <div className="profile-wrapper">
          <h1>Profile</h1>

          <div className="profile-content"> 

            <div className="profile-content-header">
              <div style={{backgroundColor: user.favouriteColour}} className="profile-profilepicture">
                        {user.profileImage ? (
                            <>
                                <img style={{borderRadius: '100%', width: 70, height: 70}} src={user.profileImage}/>
                            </>
                        ) : (
                            <>
                                <p>{user.firstName.charAt(0)}{user.lastName.charAt(0)}</p>
                            </>
                        )}
                        
                </div>
              <h1>{user.firstName} {user.lastName}</h1>
            </div>
            <form onSubmit={handleSubmit} className="profile-form" >
              <div className="profile-formcontent">
              <div className="profile-section1">
                <h1>Account info</h1>
                      <label>First Name*</label>
                      <input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInput}
                        className="profile-input"
                      />

                      <label>Last Name*</label>
                      <input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInput}
                        className="profile-input"
                      />

                      <label>Email*</label>
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleInput}
                        className="profile-input"
                      />
                      <label>Job title</label>
                      <input
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleInput}
                        className="profile-input"
                      />
              </div>
              <div className="profile-section2">
                <h1>Adress</h1>
                      <label>Street</label>
                      <input
                        name="street"
                        value={formData.street}
                        onChange={handleInput}
                        className="profile-input"
                      />

                      <label>City</label>
                      <input
                        name="city"
                        value={formData.city}
                        onChange={handleInput}
                        className="profile-input"
                      />
              </div>
              </div>
              <button className="profile-savebtn">Save</button>

            </form>


          </div>
        </div>
      </>
    )
}

export default ProfileComponent
