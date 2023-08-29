import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function UpdateUserProfile({ onFinishEditing }) {
  const { userId } = useParams()
  const [userData, setUserData] = useState(null)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(data => {
        setUserData(data)
        const [first, ...rest] = data.name.split(' ')
        setFirstName(first)
        setLastName(rest.join(' '))
      })
      .catch(error => console.error("There was a problem fetching user data:", error))
  }, [userId])

  if (!userData) return <p>Loading...</p>

  const handleInputChange = (event) => {
    const { name, value } = event.target

    if (name === "firstName") {
      setFirstName(value)
    } else if (name === "lastName") {
      setLastName(value)
    } else {
      setUserData(prevState => ({ ...prevState, [name]: value }))
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const updatedUser = {
      ...userData,
      name: `${firstName} ${lastName}`
    }

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedUser)
    })
    .then(response => response.json())
    .then(() => onFinishEditing(updatedUser))
    .catch(error => console.error("There was a problem updating user data:", error))
  }

  const renderInput = (label, name, type = "text", value) => (
    <div>
      <label>
        {label}:
        <input type={type} name={name} value={value} onChange={handleInputChange} />
      </label>
      <br />
    </div>
  )

  return (
    <div>
      <h2>Update Account Info</h2>
      <form onSubmit={handleSubmit}>
        {renderInput("First Name", "firstName", "text", firstName)}
        {renderInput("Last Name", "lastName", "text", lastName)}
        {renderInput("Username", "username", "text", userData.username)}
        {renderInput("Email", "email", "email", userData.email)}

        <h3>Address</h3>
        {renderInput("Street", "street", "text", userData.address.street)}
        {renderInput("Suite", "suite", "text", userData.address.suite)}
        {renderInput("City", "city", "text", userData.address.city)}
        {renderInput("Zipcode", "zipcode", "text", userData.address.zipcode)}

        <h3>Contact Info</h3>
        {renderInput("Phone", "phone", "tel", userData.phone)}
        {renderInput("Website", "website", "url", userData.website)}

        <h3>Company Info</h3>
        {renderInput("Name", "companyName", "text", userData.company.name)}
        {renderInput("Catch Phrase", "catchPhrase", "text", userData.company.catchPhrase)}
        {renderInput("Business Statement", "bs", "text", userData.company.bs)}

        <button type="submit">Update Profile</button>
      </form>
    </div>
  )
}

export default UpdateUserProfile