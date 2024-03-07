import { useState } from "react";
import { useNavigate } from 'react-router-dom'

function Profile({ user, baseURL }){

    const [person, setPerson] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        jobTitle: user.jobTitle,
        street: user.street,
        city: user.city,
        favouriteColour: user.favouriteColour,
        profileImage: user.profileImage
      });

      const navigate = useNavigate();
    
    if (!person) return <p>Loading...</p>

    function handleSubmit(event) {
        event.preventDefault();
    
        fetch(`${baseURL}/contact/${user.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(person),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            navigate('/');
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    return (
        <>
            <h1>Edit Profile</h1>
            <button className="profile-icon" onClick={() => navigate('/profileIcon')}>
            <img src={user.profileImage}/>
            </button>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    onChange={e => setPerson(prevPerson => ({ ...prevPerson, [e.target.name]: e.target.value }))}
                    value={person.firstName}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    onChange={e => setPerson(prevPerson => ({ ...prevPerson, [e.target.name]: e.target.value }))}
                    value={person.lastName}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    onChange={e => setPerson(prevPerson => ({ ...prevPerson, [e.target.name]: e.target.value }))}
                    value={person.email}
                />
                <label htmlFor="jobTitle">job Title</label>
                <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    onChange={e => setPerson(prevPerson => ({ ...prevPerson, [e.target.name]: e.target.value }))}
                    value={person.jobTitle}
                />
                <label htmlFor="street">Street</label>
                <input
                    type="text"
                    id="street"
                    name="street"
                    onChange={e => setPerson(prevPerson => ({ ...prevPerson, [e.target.name]: e.target.value }))}
                    value={person.street}
                />
                <label htmlFor="city">City</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    onChange={e => setPerson(prevPerson => ({ ...prevPerson, [e.target.name]: e.target.value }))}
                    value={person.city}
                />
                <label htmlFor="favouriteColour">favourite Colour</label>
                <input
                    type="text"
                    id="favouriteColour"
                    name="favouriteColour"
                    onChange={e => setPerson(prevPerson => ({ ...prevPerson, [e.target.name]: e.target.value }))}
                    value={person.favouriteColour}
                />
                <button type="submit">Edit</button>
                </form>
        </>
    )
}
export default Profile