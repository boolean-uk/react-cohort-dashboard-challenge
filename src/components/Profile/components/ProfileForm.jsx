import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function ProfileForm({ URL, setShouldGetPosts, setShouldGetLoggedInUser }) {

    const { contactId } = useParams()
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

    const accountInfo = [
        {desc: "firstName", title: "First Name*"},
        {desc: "lastName", title: "Last Name*"},
        {desc: "username", title: "Username*"},
        {desc: "email", title: "Email*"}
    ]

    const addressInfo = [
        {desc: "street", title: "Street"},
        {desc: "suite", title: "Suite"},
        {desc: "city", title: "City"},
        {desc: "zipcode", title: "Zipcode"}
    ]

    const contactInfo = [
        {desc: "phone", title: "Phone*"},
        {desc: "website", title: "Website"}
    ]

    const companyInfo = [
        {desc: "companyName", title: "Name"},
        {desc: "catchPhrase", title: "Catch Phrase"},
        {desc: "businessStatement", title: "Business Statement"}
    ]

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
        .then(() => setShouldGetLoggedInUser(true))
    }

    function handleSubmit(e) {
        e.preventDefault()
        updateContact()
        navigate('/')
    }    

    return (
        <form className="profile-form grid" onSubmit={handleSubmit}>
            <div className="account-info profile-group">
                <h2 className="profile-group-title">Account Info</h2>
                {accountInfo.map((option) =>
                    <label className="profile-label" htmlFor={option.desc} key={option.desc}>
                        {option.title}
                        <input className="profile-input grid"
                            type="text"
                            id={option.desc}
                            name={option.desc}
                            value={userData.input}
                            onChange={e => handleChange(e)}
                        />
                    </label>
                )}  
            </div>
            <div className="address profile-group">
                <h2>Address</h2>
                {addressInfo.map((option) =>
                    <label className="profile-label" htmlFor={option.desc} key={option.desc}>
                        {option.title}
                        <input className="profile-input grid"
                            type="text"
                            id={option.desc}
                            name={option.desc}
                            value={userData.input}
                            onChange={e => handleChange(e)}
                        />
                    </label>
                )}  
            </div>
            <div className="contact-info profile-group">
                <h2>Contact info</h2>
                {contactInfo.map((option) =>
                    <label className="profile-label" htmlFor={option.desc} key={option.desc}>
                        {option.title}
                        <input className="profile-input grid"
                            type="text"
                            id={option.desc}
                            name={option.desc}
                            value={userData.input}
                            onChange={e => handleChange(e)}
                        />
                    </label>
                )}
            </div>
            <div className="contact-info profile-group">
                <h2>Company info</h2>
                {companyInfo.map((option) =>
                    <label className="profile-label" htmlFor={option.desc} key={option.desc}>
                        {option.title}
                        <input className="profile-input grid"
                            type="text"
                            id={option.desc}
                            name={option.desc}
                            value={userData.input}
                            onChange={e => handleChange(e)}
                        />
                    </label>
                )}
            </div>
            <p className="required-hint">*Required</p>
            <button className="form-button" type="submit">Save</button>
        </form>
    )
}

export default ProfileForm