import { useContext } from "react"
//hämta contacts
import { ContactContext } from "../App"

import circle from '../assets/yellow-and-amber-colored-circles-clipart-1.png'

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
    const initials = matchingContact.firstName.charAt(0) + matchingContact.lastName.charAt(0);

    return (
        <li className="comment">
            <div className='pic-and-name'>
            <div className='profile-container'>
                    <div
                        className="profile_circle"
                        style={{ backgroundColor: matchingContact.favouriteColour }}>
                        <div className="profile-text">{initials}</div>
                        </div>
                    </div>

                    <h2>{name}</h2>
                </div>
            <p>{comment.content}</p>
        </li>
    )
}

export default Comment