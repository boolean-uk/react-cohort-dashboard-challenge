import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Header from './Header'
import LeftMenu from './LeftMenu'
import "/src/style/DashBoard.css"
import "/src/style/ProfileView.css";

export default function ProfileView () {
    const { id } = useParams();
    const [contact, setContact] = useState({})

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        email: "",
        jobTitle: "",
        street: "",
        city: "",
        latitude: "",
        longitude: "",
    })

    const navigate = useNavigate();
    
    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/StianNordvik/contact/${id}`)
        .then(response => response.json())
        .then(data => {
            setContact(data);
            setForm({
                firstName: data.firstName,
                lastName: data.lastName,
                gender: data.gender,
                email: data.email,
                jobTitle: data.jobTitle,
                street: data.street,
                city: data.city,
                latitude: data.latitude,
                longitude: data.longitude

            })
        })
    }, [id])

    const handleFormChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        fetch(`https://boolean-api-server.fly.dev/StianNordvik/contact/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .then(() => navigate(`/profile/${id}`))
    }

    return(
        <div className="dashBoard" >
            <Header/>
            <LeftMenu/>
            <div className="view">
                <div className="profileView">
                    <div className="profileInfo">
                      <div className="profileText">
                      <img src={contact.profileImage} className="profileImage"></img>
                        <form className="putForm" onSubmit={handleFormSubmit}>
                            <p><b><label htmlFor="firstName">First Name:</label></b></p>
                            <p><input type="text" name="firstName" id="firstName" onChange={handleFormChange} value={form.firstName}/></p>
                            <p><b><label htmlFor="lastName">Last Name:</label></b></p>
                            <p><input type="text" name="lastName" id="lastName" onChange={handleFormChange} value={form.lastName}/></p>
                            <p><b><label htmlFor="gender">Gender: </label></b></p>
                            <p><input type="text" name="gender" onChange={handleFormChange} value={form.gender}/></p>
                            <p><b><label htmlFor="email">Email:</label></b></p>
                            <p><input type="text" name="email" onChange={handleFormChange} value={form.email}/></p>
                            <p><b><label htmlFor="jobTitle">Job Title:</label></b></p>
                            <p><input type="text" name="jobTitle" onChange={handleFormChange} value={form.jobTitle}/></p>
                            <p><b><label htmlFor="street">Street:</label></b></p>
                            <p><input type="text" name="street" onChange={handleFormChange} value={form.street}/></p>
                            <p><b><label htmlFor="city">City:</label></b></p>
                            <p><input type="text" name="city" onChange={handleFormChange} value={form.city}/></p>
                            <p><b><label htmlFor="latitude">Latitude:</label></b></p>
                            <p><input type="text" name="latitude" onChange={handleFormChange} value={form.latitude}/></p>
                            <p><b><label htmlFor="longitude">Longitude:</label></b></p>
                            <p><input type="text" name="longitude" onChange={handleFormChange} value={form.longitude}/></p>
                            <p><button type="submit" className="btnPut">Update</button></p>

                        </form>
                        <b>{contact.firstName} {contact.lastName}</b>
                        <h2>Profile info</h2>
                        <p><b>First Name:</b> {contact.firstName}</p>
                        <p><b>Last Name:</b> {contact.lastName}</p>
                        <p><b>Gender:</b> {contact.gender}</p>
                        <p><b>Email:</b> {contact.email}</p>
                        <p><b>Job Title:</b> {contact.jobTitle}</p>
                        <p><b>Street:</b> {contact.street}</p>
                        <p><b>City:</b> {contact.city}</p>
                        <p><b>Latitude</b> {contact.latitude}<b>Longitude:</b> {contact.longitude}</p>
                        <iframe width="100%" height="250" src={`https://maps.google.com/maps?q=${contact.latitude}, ${contact.longitude}&output=embed`}></iframe>
                      </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}