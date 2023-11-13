import { useEffect, useState } from "react"

export default function Comment({comment, currentUserId}) {
    const [commentAuthor, setCommentAuthor] = useState(null)

    useEffect(() =>{
        fetch(`https://boolean-api-server.fly.dev/ilham-saleh/contact/${comment.contactId}`)
        .then(res => res.json())
        .then(data => setCommentAuthor(data))
    }, [] )

 
    // console.log("COmments contact ID", comment.contactId)

    if (!commentAuthor) {
        return <p>Loading...</p>
    }
    const initials = commentAuthor.firstName.charAt(0) + commentAuthor.lastName.charAt(0)
    return (
        <li>
         <div className="comment-container">
            <div className="user-img-container">{initials}</div>
            <div className="comment-user-content">
                <h5>{commentAuthor.firstName} {commentAuthor.lastName}</h5>
                <p>{comment.content}</p>
            </div>
        </div>
        </li>
    )
}