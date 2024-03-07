import { useEffect, useState } from "react"

function Comment({ comment, baseURL}) {

    const [commentContact, setCommentContact] = useState([])

    // fetch contact from comment contact id
    useEffect(() => {
        fetch(`${baseURL}/contact/${comment.contactId}`)
        .then((response) => response.json())
        .then((data) => setCommentContact(data));
        }, [baseURL, comment.contactId]);

    return(
        <div className="purple">
        <article>
            <h4>{commentContact.firstName} {commentContact.lastName}</h4>
            <div className="post-icon">
                {/* Make this link to profile page */}
            <img src={commentContact.profileImage}/>
            </div>
            <div>
                <h4>{comment.content}</h4>
            </div>
        </article>
        </div>
    )
}
export default Comment