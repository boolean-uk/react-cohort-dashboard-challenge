import { useEffect, useState } from "react"

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
                    <div className="profile-image" style={{backgroundColor:`${commentContact.favouriteColour}`}}>
                        {commentContact && <p>{`${commentContact.firstName[0]}${commentContact.lastName[0]}`}</p>}
                    </div>

                    <div className="comment-container">
                        <p className="poster-name">{`${commentContact.firstName} ${commentContact.lastName}`}</p>
                        <p>{comment.content}</p>
                    </div>
                </li>
            }
        </>
    )
}