import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import UpdateUserProfile from './UpdateUserProfile'
import AuthorInitials from './AuthorInitials'


function UserProfile() {
  const { userId } = useParams()
  const [userData, setUserData] = useState(null)
  const [isEditing, setIsEditing] = useState(false)

  let firstName = ''
  let lastName = ''

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error("There was a problem fetching user data:", error))
  }, [userId])

  if (!userData) return <p>Loading...</p>
  
  if (typeof userData.name === "string") {
    const nameParts = userData.name.split(' ').filter(Boolean);
    firstName = nameParts[0] || '';
    lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : ''
  }

  if (isEditing) {
    return <UpdateUserProfile userId={userId} onFinishEditing={(updatedData) => {
      setIsEditing(false)
      setUserData(updatedData)  // This sets the local userData state with the edited data
    }} />
  }

  return (
    <div className="profile-container">
        <h2>Profile</h2>
        <AuthorInitials name={userData.name} id={userId} />
        <span className="author-name">{userData.name}</span>
        <button onClick={() => setIsEditing(true)} className="edit-btn">Edit Information</button>
        
        <section className="info-sections">
            <div className="account-info">
                <h2>Account info</h2>
                <p><strong>First Name:</strong> {firstName}</p>
                <p><strong>Last Name:</strong> {lastName}</p>
                <p><strong>Username:</strong> {userData.username}</p>
                <p><strong>Email:</strong> {userData.email}</p>
            </div>

            <div className="address-info">
                <h3>Address</h3>
                <p><strong>Street:</strong> {userData.address?.street}</p>
                <p><strong>Suite:</strong> {userData.address?.suite}</p>
                <p><strong>City:</strong> {userData.address?.city}</p>
                <p><strong>Zipcode:</strong> {userData.address?.zipcode}</p>
            </div>

            <div className="contact-info">
                <h3>Contact Info</h3>
                <p><strong>Phone:</strong> {userData.phone}</p>
                <p><strong>Website:</strong> {userData.website}</p>
            </div>

            <div className="company-info">
                <h3>Company Info</h3>
                <p><strong>Name:</strong> {userData.company?.name}</p>
                <p><strong>Catch Phrase:</strong> {userData.company?.catchPhrase}</p>
                <p><strong>Business Statement:</strong> {userData.company?.bs}</p>
            </div>
        </section>
    </div>
)
}

export default UserProfile