import { useContext, useEffect, useState } from "react"
import { PostContext } from "../App"

function CommentItem({comment}){
    const {contacts} = useContext(PostContext)
    const [contact, setContact] = useState(null)

    useEffect(() => {
        if (contacts) {
            const matchingContact = contacts.find((c) => c.id === comment.contactId)
            setContact(matchingContact)
        }
    }, [contacts, comment.contactId])

    if(!comment || contact === null){
        return <div>Loading...</div>
    }
    
    return(
        <li>
            <h3>{contact.firstName.charAt(0)} {contact.lastName.charAt(0)} {contact.firstName} {contact.lastName}</h3>
            <p>{comment.content}</p>
        </li>
    )
}

export default CommentItem