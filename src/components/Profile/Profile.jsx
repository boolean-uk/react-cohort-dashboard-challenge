import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { MetaContext } from '../../App'

function Profile() {
    const { id } = useParams()
    const { contacts } = useContext(MetaContext)
    const [contact, setContacts] = useState(null)

    useEffect(() => {
        const foundContact = contacts.find(c => c.id.toString() === id)
        setContacts(foundContact)
    }, [contacts, id])


    if (!contact) {
        return <div>Contact not found</div>
    }

    return (
        <>
            <p>Here be dragons... (Under construction)</p>
            <h1>{contact.firstName + " " + contact.lastName}</h1>
            <img src={contact.profileImage} width="100px" alt="Contact image" />
            <p><b>Street: </b>{contact.street}</p>
            <p><b>City: </b>{contact.city}</p>
            <p><b>Gender: </b>{contact.gender}</p>
            <p><b>Email: </b>{contact.email}</p>
            <p><b>Job title: </b>{contact.jobTitle}</p>
            <p><b>Favourite Colour: </b>{contact.favouriteColour}</p>

            <iframe width="50%" height="250" src={`https://maps.google.com/maps?q=${contact.latitude}, ${contact.longitude}&output=embed`}></iframe>
            
            <br /><br />
        </>
    )
}

export default Profile