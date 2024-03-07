import { useContext } from "react"
//hämta contacts
import { ContactContext } from "../App"

function Comment({ comment }) {
    const { contacts } = useContext(ContactContext)

    //vänta på att data 'contacts' har hämtats från api
    if (!contacts || contacts.length === 0) {
        return null;
    }

    //mappa contacts id mot post.contactId
    const matchingContact = contacts.find(contact => Number(contact.id) === Number(comment.contactId));
    if (!matchingContact) {
        return null; // or handle the case when matchingContact is undefined
    }
    
    const name = matchingContact.firstName + ' ' + matchingContact.lastName

    return (
        <li>
            {name}
            <br />
            {comment.content}
        </li>
    )
}

export default Comment