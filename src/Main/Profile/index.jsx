import { useContext, useState } from "react"
import { UserContext } from "../../App"
import AccountInfo from "./AccountInfo"

import './style.css'
import Address from "./Address"
import OtherInfo from "./OtherInfo"
import SaveInfo from "./SaveInfo"
import { useParams } from "react-router-dom"

function Profile() {
    const context = useContext(UserContext)
    const [usersProfile, setUsersProfile] = useState({})
    const [formInput, setFormInput] = useState({})
    const contactId = useParams()



    const handleChange = (e) => {
        setFormInput({...formInput, [e.target.name]: e.target.value })
        console.log(formInput)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("THIS WAS SUBMITTED :) ", formInput)

        fetch(`https://boolean-api-server.fly.dev/nora-hansen/contact/${contactId.id}`,
        {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formInput)
        })
            .then(response => response.json())
            .then(response => console.log(response))
    }

    return(
        <>
        <h1>Profile</h1>
        <div className="profile">
            <div>
                <div className="profile-top">
                    <div className="profile-pic-big" style={{backgroundColor: context.users[0].favouriteColour}} >{context.users[0].firstName[0]}{context.users[0].lastName[0]}</div>
                    <h2>{context.currentUser.firstName} {context.currentUser.lastName}</h2>
                </div>
                <hr />
                <div className="profile-inputs">
                <form onSubmit={handleSubmit}>
                    <div className="profile-inputs-row">
                        <AccountInfo formInput={formInput} setFormInput={setFormInput} handleSubmit={handleSubmit} handleChange={handleChange}/>
                        <Address formInput={formInput} setFormInput={setFormInput} handleSubmit={handleSubmit} handleChange={handleChange}/>
                    </div>
                    <div className="profile-inputs-row">
                        <OtherInfo formInput={formInput} setFormInput={setFormInput} handleSubmit={handleSubmit} handleChange={handleChange}/>
                        <SaveInfo handleSubmit={handleSubmit} />
                    </div>
                </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Profile