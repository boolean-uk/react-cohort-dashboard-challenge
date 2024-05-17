import useContact from "../../hooks/useContact"
import Avatar from "../Avatar"

export default function Comment(props) {

    const contact = useContact(props.comment.contactId)
    return (
        <div>            
            <Avatar id={props.comment.contactId}/>
            <h4>{contact.firstName} {contact.lastName}</h4>
        Comment: {props.comment.content}
        </div>
    )
}