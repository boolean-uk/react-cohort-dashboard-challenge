import React, { useState, useEffect } from 'react'

function ProfileIcon () {
    
  const [contact, setContact] = useState({})

  console.log(contact)

  const userName = "TomEastwood"
  const baseUrl = `https://boolean-api-server.fly.dev/${userName}`
  const endpointForContacts = `/contact`

  useEffect(() => {
      fetch(baseUrl + endpointForContacts)
          .then(res => res.json())
          .then(data => setContact(data))
  } , [])

  let admin = contact[0]

    console.log(admin)

    if(!admin) {
        return <div>
                <h3>LOADING</h3>
                </div>
    }
    
    return (
        <div className="profile-icon">
            <h3>{admin.firstName.charAt(0) + admin.lastName.charAt(0)}</h3>
        </div>
    )
}

export default ProfileIcon