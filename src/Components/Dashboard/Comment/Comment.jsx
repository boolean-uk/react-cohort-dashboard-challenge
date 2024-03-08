import { useContext, useState } from "react"
import ProfilePicture from "../../ProfilePicture/ProfilePicture"
import { ContactContext } from "../Dashboard"
import PropTypes from "prop-types"

function Comment({ comment }) {
  const { contacts } = useContext(ContactContext)
  const [contact, ] = useState(contacts.find(c => c.id === comment.contactId))

  return (
    <div className="comment">
      <ProfilePicture user={contact} />
      <div className="comment-content">
        <p><b>{contact.firstName} {contact.lastName}</b></p>
        <p>{comment.content}</p>
      </div>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired
}

export default Comment
