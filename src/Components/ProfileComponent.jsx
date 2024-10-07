import { useContext, useState, useEffect } from "react";
import { ContactContext } from "../App"; 

export default function ProfileComponent() {
  const { contacts, setContacts } = useContext(ContactContext); 
  const [profileData, setProfileData] = useState(null); 
  const [isEditing, setIsEditing] = useState(false); 

  // The logged in User is the one with id 1, for the purpouse of displaying the task
  useEffect(() => {
    const currentUser = contacts.find(contact => contact.id === 1);
    if (currentUser) {
      setProfileData(currentUser);
    }
  }, [contacts]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSave = async () => {
    const response = await fetch(`https://boolean-uk-api-server.fly.dev/victorscodeingcorner/contact/${profileData.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profileData),
    });
  
    if (response.ok) {
      const updatedContact = await response.json();
      const updatedContacts = contacts.map(contact =>
        contact.id === profileData.id ? updatedContact : contact
      );
      setContacts(updatedContacts);
      setIsEditing(false);
    } else {
      console.error("Failed to update profile");
    }
  };
  

  if (!profileData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Profile</h1>
      {isEditing ? (
        <div>
          <img src={profileData.profileImage} alt="Profile" />
          <form>
            <div>
              <label>First Name:</label>
              <input
                type="text"
                name="firstName"
                value={profileData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={profileData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Gender:</label>
              <input
                type="text"
                name="gender"
                value={profileData.gender}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Job Title:</label>
              <input
                type="text"
                name="jobTitle"
                value={profileData.jobTitle}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Street:</label>
              <input
                type="text"
                name="street"
                value={profileData.street}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>City:</label>
              <input
                type="text"
                name="city"
                value={profileData.city}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Favourite Colour:</label>
              <input
                type="color"
                name="favouriteColour"
                value={profileData.favouriteColour}
                onChange={handleInputChange}
              />
            </div>
          </form>
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <img src={profileData.profileImage} alt="Profile" />
          <p>First Name: {profileData.firstName}</p>
          <p>Last Name: {profileData.lastName}</p>
          <p>Gender: {profileData.gender}</p>
          <p>Email: {profileData.email}</p>
          <p>Job Title: {profileData.jobTitle}</p>
          <p>Street: {profileData.street}</p>
          <p>City: {profileData.city}</p>
          <p>Favourite Colour: 
            <span style={{ backgroundColor: profileData.favouriteColour, display: 'inline-block', width: '20px', height: '20px', marginLeft: '10px' }}></span>
          </p>
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        </div>
      )}
    </div>
  );
}

