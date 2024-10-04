import { useContext, useEffect, useState } from "react"
import { AppContext } from "../App"
import { useParams } from "react-router-dom"

function ProfilePage({ onAction }) {
    const { contacts } = useContext(AppContext)
    const [formKey, setFormKey] = useState(Date.now())
    const [contact, setContact] = useState(null)
    const { id } = useParams()


    // Set the user to the correct user id
    useEffect(() => {
        const userId = parseInt(id)
        setContact(contacts.find(contact => contact.id === userId))
    }, [contacts, id])

    if(!contact) {
        return <div>Loading...</div>
    }


    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await fetch(`https://boolean-uk-api-server.fly.dev/Yumikitsu/contact/${contact.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(contact)
            })

            if (response.ok) {
                onAction()
                setFormKey(Date.now())
            } else {
                console.error("Failed to update Contact")
            }
        } catch (error) {
            console.error("Error:", error)
        }
    }

    // Handle a freetext change event
    const handleTextChange = (event) => {
        setContact({...contact, [event.target.name]:event.target.value})
    }

    return (
        <>
        <div className="ProfileTop">
            <h2 className="ProfileText">Profile</h2>
        </div>
        <div className="ProfileBottom">
            <div className="ProfileSurvey">
                <div className="ProfileUser">
                    <button className="UserIcon-Profile" style={{ backgroundColor: contact.favouriteColour }}>{contact.firstName ? contact.firstName[0] : ''}{contact.firstName ? contact.lastName[0] : ''}</button>
                    <h2 className="ProfileName">{contact.firstName} {contact.lastName}</h2>
                </div>
                <section className="FormSection">
                    <form key={formKey} className="Form" onSubmit={handleSubmit}>
                        <div className="FormContent">
                            <div className="AccountInfo">
                                <h2>Account Info</h2>
                                <label>First Name*
                                    <input type="text" name="firstName" value={contact.firstName} onChange={handleTextChange} required/>
                                </label>
                                <label>Last Name*
                                    <input type="text" name="lastName" value={contact.lastName} onChange={handleTextChange} required/>
                                </label>
                                <label>Gender*
                                    <input type="text" name="gender" value={contact.gender} onChange={handleTextChange} required/>
                                </label>
                                <label>Email*
                                    <input type="text" name="email" value={contact.email} onChange={handleTextChange} required/>
                                </label>
                            </div>
                            <div className="Address">
                                <h2>Address</h2>
                                <label>Street
                                    <input type="text" name="street" value={contact.street} onChange={handleTextChange}/>
                                </label>
                                <label>City
                                    <input type="text" name="city" value={contact.city} onChange={handleTextChange}/>
                                </label>
                            </div>
                        </div>
                        <div className="SubmitButton">
                            <input className="SubmitForm" type="submit" value={"Save"} />
                        </div>
                    </form>
                </section>
            </div>
        </div>
        </>
    )
}

export default ProfilePage