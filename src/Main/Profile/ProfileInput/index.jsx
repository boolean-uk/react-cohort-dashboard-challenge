import { useState } from "react"

import AccountInfo from "./AccountInfo"
import Address from "./Address"
import OtherInfo from "./OtherInfo"
import SaveInfo from "./SaveInfo"

function ProfileInput({contactId}) {
    const [formInput, setFormInput] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(`https://boolean-api-server.fly.dev/nora-hansen/contact/${contactId.id}`,
        {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formInput)
        })
            .then(response => response.json())
            .then(response => console.log(response))
    }

    const handleChange = (e) => {
        setFormInput({...formInput, [e.target.name]: e.target.value })
    }

    return(
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
    )
}

export default ProfileInput