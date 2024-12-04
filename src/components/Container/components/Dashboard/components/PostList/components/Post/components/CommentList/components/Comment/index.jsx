import "../../../../../../../../../../../../assets/css/Comment.css"
import "../../../../../../../../../../icons/InitialsProfileIcon"
import InitialsProfileIcon from "../../../../../../../../../../icons/InitialsProfileIcon";
import * as API from "../../../../../../../../../../../../API"
import { useEffect, useState } from "react";

function Comment({ comment }) {
    const [contact, setContact] = useState({})
    const [initials, setInitials] = useState("")

    useEffect(() => async function () {
        const contactFromApi = (await API.get("contact/" + comment.contactId)).data
        setInitials(contactFromApi.firstName.charAt(0) + contactFromApi.lastName.charAt(0))
        setContact(contactFromApi)
    }, [])

    return (
        <div className="Comment-main">
            <div>
                <InitialsProfileIcon
                    color={contact.favouriteColour}
                    initials={initials}
                />
            </div>

            <div className="Comment-author-text-container">
                <h4>{contact.firstName} {contact.lastName}</h4>
                <p>{comment.content}</p>
            </div>
        </div>
    )
}

export default Comment;