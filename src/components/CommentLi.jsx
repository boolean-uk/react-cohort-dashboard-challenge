import { useEffect, useState } from "react"
import ProfileImage from "./ProfileImage"

export default function CommentLi({ comment}) {
    const [commentContact, setCommentContact] = useState(null)

    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/MyrtheDullaart/contact/${comment.contactId}`)
        .then(response => response.json())
        .then(setCommentContact)
    }, [comment.contactId])

    return (
        <>
            {commentContact && 
                <li className="comment-li">
                    <ProfileImage loggedInUser={commentContact}/>

                    <div className="comment-container">
                        <p className="poster-name">{`${commentContact.firstName} ${commentContact.lastName}`}</p>
                        <p>{comment.content}</p>
                    </div>
                </li>
            }
        </>
    )
}