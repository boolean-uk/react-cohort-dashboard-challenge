import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { MyContext } from "../../App.jsx";

function Profile(){

    const context = useContext(MyContext)

    const [person, setPerson] = useState({
        firstName: context.user.firstName,
        lastName: context.user.lastName,
        email: context.user.email,
        jobTitle: context.user.jobTitle,
        street: context.user.street,
        city: context.user.city,
        favouriteColour: context.user.favouriteColour,
        profileImage: context.user.profileImage
      });

      const navigate = useNavigate();
    
    if (!person) return <p>Loading...</p>

    function handleSubmit(event) {
        event.preventDefault();
    
        fetch(`${context.baseURL}/contact/${context.user.id}`, {
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
        <div className="profile-edit-container"> 
            <h1>Edit Profile</h1>
            <form onSubmit={handleSubmit} className="profile-edit-form">
                <div className="form-group">
                    <img src={context.user.profileImage} alt="Profile" className="profile-edit-avatar"/>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="form-control"
                        onChange={e => setPerson(prevPerson => ({ ...prevPerson, [e.target.name]: e.target.value }))}
                        value={person.firstName}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="form-control"
                        onChange={e => setPerson(prevPerson => ({ ...prevPerson, [e.target.name]: e.target.value }))}
                        value={person.lastName}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control"
                        onChange={e => setPerson(prevPerson => ({ ...prevPerson, [e.target.name]: e.target.value }))}
                        value={person.email}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="jobTitle">Job Title</label>
                    <input
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        className="form-control"
                        onChange={e => setPerson(prevPerson => ({ ...prevPerson, [e.target.name]: e.target.value }))}
                        value={person.jobTitle}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="street">Street</label>
                    <input
                        type="text"
                        id="street"
                        name="street"
                        className="form-control"
                        onChange={e => setPerson(prevPerson => ({ ...prevPerson, [e.target.name]: e.target.value }))}
                        value={person.street}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        className="form-control"
                        onChange={e => setPerson(prevPerson => ({ ...prevPerson, [e.target.name]: e.target.value }))}
                        value={person.city}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="favouriteColour">Favourite Colour</label>
                    <input
                        type="text"
                        id="favouriteColour"
                        name="favouriteColour"
                        className="form-control"
                        onChange={e => setPerson(prevPerson => ({ ...prevPerson, [e.target.name]: e.target.value }))}
                        value={person.favouriteColour}
                    />
                </div>
                <button type="submit" className="submit-button">Save Changes</button>
            </form>
        </div>
    )
}
export default Profile