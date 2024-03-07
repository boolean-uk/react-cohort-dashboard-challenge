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
        <main className="main green">
            <div className="yellow">
                <article>
            <h1>Edit Profile</h1>
            <button className="sidebar-icons"/* naviger til edit profile pic component (kanskje pop up?) onClick={() => navigate('/profileIcon')} */>
            <img src={context.user.profileImage}/>
            </button>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name </label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    onChange={e => setPerson(prevPerson => ({ ...prevPerson, [e.target.name]: e.target.value }))}
                    value={person.firstName}
                />
                <p></p>
                <label htmlFor="lastName">Last Name </label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    onChange={e => setPerson(prevPerson => ({ ...prevPerson, [e.target.name]: e.target.value }))}
                    value={person.lastName}
                />
                <p></p>
                <label htmlFor="email">Email </label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    onChange={e => setPerson(prevPerson => ({ ...prevPerson, [e.target.name]: e.target.value }))}
                    value={person.email}
                />
                <p></p>
                <label htmlFor="jobTitle">job Title </label>
                <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    onChange={e => setPerson(prevPerson => ({ ...prevPerson, [e.target.name]: e.target.value }))}
                    value={person.jobTitle}
                />
                <p></p>
                <label htmlFor="street">Street </label>
                <input
                    type="text"
                    id="street"
                    name="street"
                    onChange={e => setPerson(prevPerson => ({ ...prevPerson, [e.target.name]: e.target.value }))}
                    value={person.street}
                />
                <p></p>
                <label htmlFor="city">City </label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    onChange={e => setPerson(prevPerson => ({ ...prevPerson, [e.target.name]: e.target.value }))}
                    value={person.city}
                />
                <p></p>
                <label htmlFor="favouriteColour">favourite Colour </label>
                <input
                    type="text"
                    id="favouriteColour"
                    name="favouriteColour"
                    onChange={e => setPerson(prevPerson => ({ ...prevPerson, [e.target.name]: e.target.value }))}
                    value={person.favouriteColour}
                />
                <p></p>
                <button type="submit">Edit</button>
                </form>
                </article>
            </div>
        </main>
    )
}
export default Profile