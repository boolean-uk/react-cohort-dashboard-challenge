import { useState } from "react"
import { useNavigate } from "react-router-dom"

import AccountInfo from "./AccountInfo"
import AddressInfo from "./AddressInfo"
import ContactInfo from "./ContactInfo"
import CompanyInfo from "./CompanyInfo"

function ProfileForm({ URL, setShouldGetLoggedInUser, contactId, setShouldGetPosts }) {

    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        phone: "",
        website: "",
        companyName: "",
        catchPhrase: "",
        businessStatement: ""
    })

    function handleChange(e) {
        const { name, value} = e.target
        setUserData({ ...userData, [name]: value})
    }

    function updateContact() {
        const options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        }

        fetch(`${URL}/contact/${contactId}`, options)
        .then(res => res.json())
        .then(() => {
            setShouldGetLoggedInUser(true)
            setShouldGetPosts(true)
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        updateContact()
        setTimeout(() => {
            location.reload()
        }, 10);
        navigate('/')
    } 

    return (
        <form className="profile-form grid" onSubmit={handleSubmit}>
            <AccountInfo userData={userData} handleChange={handleChange} />
            <AddressInfo userData={userData} handleChange={handleChange} />
            <ContactInfo userData={userData} handleChange={handleChange} />
            <CompanyInfo userData={userData} handleChange={handleChange} />
            <p className="required-hint">*Required</p>
            <button className="form-button" type="submit">Save</button>
        </form>
    )
}

export default ProfileForm