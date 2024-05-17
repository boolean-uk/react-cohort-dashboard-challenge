
import useContact from "../../hooks/useContact"
import './avatar.css'

export default function Avatar(props) {
const contact = useContact(props.id) 
if (contact.firstName === undefined) {
    return <div></div>
}
    return (
        <div className="avatar" style={{backgroundColor: contact.favouriteColour}}>{contact.firstName.charAt(0)}{contact.lastName.charAt(0)}</div>
    )
}