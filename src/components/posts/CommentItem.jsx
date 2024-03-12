import {useEffect, useState} from "react"
import {Link} from "react-router-dom";
import "/src/style/CommentItem.css"

export default function CommentItem ({ comment }) {
    const [contact, setContact] = useState([])
    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/StianNordvik/contact/${comment.contactId}`)
        .then((response) => response.json())
        .then((data) => setContact(data))
      }, []);
    return (
        <div className="commentItem">
            <p />
            <Link to={`/profile/${contact.id}`}>
              <img src={contact.profileImage} className="profileImage"></img>
            <b>{contact.firstName} {contact.lastName}</b>
            </Link>
            <p>
                {comment.content}
            </p>
        </div>
    )
}