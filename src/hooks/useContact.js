import { useContext } from "react"
import { ContactsContext } from "../context/ContactsContext"

export default function useContact(id) {
    const contacts = useContext(ContactsContext)
    const contact = contacts.find((item) => {return item.id === id}) ?? {}
    return contact
}