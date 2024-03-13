
import { useEffect, useState } from "react";
import { ContactContext } from "../App";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";



export default function ProfilePage() {
    const {id} = useParams()
    const [contact, setContact] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        street: "",
        city: "",
        email: "",


    })
    
    const GET_CONTACT = `https://boolean-api-server.fly.dev/OnealLane/contact/${id}`

//fetch contacts
useEffect(() => {
    fetch(GET_CONTACT)
    .then((response) => response.json())
    .then((responseData) => {
      setContact(responseData)
    })
    ;
  }, []);
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1)
    }

    const emailuser = `${contact.firstName[0]}.${contact.lastName}@hotmail.com`
    const userName = `${contact.firstName[0] + contact.lastName[0]}`

    return (
        <article className="profile-page">
    <form>
        <fieldset>
            <legend>Account Info</legend>
            <label htmlFor="first-name">First Name:</label>
            <input type="text" id="first-name" name="first-name" value={contact.firstName}required />

            <label htmlFor="Street">Street:</label>
            <input type="text" id="street" name="street" value={contact.street} required />
            
            <br></br>
            <label htmlFor="last-name">Last Name:</label>
            <input type="text" id="last-name" name="last-name" value={contact.lastName} required/>

            <label htmlFor="Suite">Suite:</label>
            <input type="suite" id="suite" name="suite" required />
            <br></br>
            
            <label  htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" value={userName} required/>

            <label htmlFor="address">City:</label>
            <input type="text" id="city" name="city" value={contact.city} required />
            <br></br>
            
            <label  htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={emailuser} required/>

            <label htmlFor="address">ZipCode:</label>
            <input type="text" id="<zip-code>" name="zip-code"  value={5007} required />
            <br></br>
        </fieldset>
    
        <input type="submit" value="Submit"/>
    </form>
    <button onClick={handleGoBack}>Return to Home</button>
        </article>
    )
}