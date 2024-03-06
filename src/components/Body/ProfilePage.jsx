import React, { useState } from 'react'
import { useContext } from 'react'
import { WebsiteContext } from '../../App'

function ProfilePage() {
    const context = useContext(WebsiteContext)
    const profile = context.profile
    const setProfile = context.setProfile

    const [tempProfile, setTempProfile] =  useState(profile);


    function handleInput(e){
        const{name, value} = e.target
        setTempProfile({...tempProfile, [name]: value})


    }

    function handleSubmit(event){
        //Navigate back to dashboard?
        setProfile(tempProfile)
        console.log("Profile SAVED")
    }

  return (
    <div>
        <h1>Profile</h1>
        <form onSubmit={handleSubmit}>
        <h3>Account Info</h3>
        <label>
            First Name:
            <input type="text" name="firstName" value={tempProfile.firstName} onChange={handleInput}/>
        </label>
        <br />
        <label>
            Last Name:
            <input type="text" name="lastName" value={tempProfile.lastName} onChange={handleInput}/>
        </label>
        <br />

        <label>
            Username:
            <input type="text" name="username" value={tempProfile.username} onChange={handleInput}/>
        </label>
        <br />

        <label>
            Email:
            <input type="text" name="email" value={tempProfile.email} onChange={handleInput}/>
        </label>
        <br />
            <h3>Address:</h3>
        <label>
            Street:
            <input type="text" name="street" value={tempProfile.street} onChange={handleInput}/>
        </label>
        <br />

        <label>
            Suite:
            <input type="text" name="suite" value={tempProfile.suite} onChange={handleInput}/>
        </label>
        <br />
        
        <label>
            City:
            <input type="text" name="city" value={tempProfile.city} onChange={handleInput}/>
        </label>
        <br />
        
        <label>
            Zipcode:
            <input type="text" name="zipcode" value={tempProfile.zipcode} onChange={handleInput}/>
        </label>
        <br />
            <h3>Contact Info</h3>
        <label>
            Phone:
            <input type="text" name="phone" value={tempProfile.phone} onChange={handleInput}/>
        </label>
        <br />
        
        <label>
            Website:
            <input type="text" name="website" value={tempProfile.website} onChange={handleInput}/>
        </label>
        <br />

            <h3>Company Info</h3>
            
        <label>
            Name:
            <input type="text" name="companyName" value={tempProfile.companyName} onChange={handleInput}/>
        </label>
        <br />
        
        <label>
            Catch Phrase:
            <input type="text" name="companyCatchPhrase" value={tempProfile.companyCatchPhrase} onChange={handleInput}/>
        </label>
        <br />
        
        <label>
            Business Statement:
            <input type="text" name="companyBusinessStatement" value={tempProfile.companyBusinessStatement} onChange={handleInput}/>
        </label>
        <br />

        <button type='submit'>Save</button>
        </form>
    </div>
  )
}

export default ProfilePage