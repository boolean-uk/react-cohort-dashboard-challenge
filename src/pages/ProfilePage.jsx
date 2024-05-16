import { useState, useEffect } from "react"
import { fetchContact } from "../services/api"
import ProfileForm from "../components/ProfileForm"

export default function Profile() {
    
    const [contact, setContact] = useState({})

    async function getContact() {
        const contactResponse = await fetchContact(1)
        setContact(contactResponse)
}
console.log("contact", contact)

useEffect(() => {getContact()}, [])

    return (
        <div>Profile <ProfileForm contact={contact}/></div>
    )
}