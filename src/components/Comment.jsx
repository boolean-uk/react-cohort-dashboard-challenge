import { useContext } from "react"
import { ContactContext } from "../App"
import { Link } from 'react-router-dom';
import ProfileIcon from './ProfileIcon.jsx';


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
            <Link className='link' to={`/profile/${matchingContact.id}`}>
                <div className='pic-and-name'>
                    <ProfileIcon
                        initials={initials}
                        matchingContact={matchingContact} />

                    <h2>{name}</h2>
                </div>
            </Link>
            </div>
            <p>{comment.content}</p>
        </li>
    )
}

export default Comment