import { useEffect, useState } from "react"
import UserProfileCircle from "../../../Shared/UserProfileCircle"

function PostComments({ showComments, comment, URL, userBgColour }) {

    const [commentAuthor, setCommentAuthor] = useState(null)

    useEffect(() => {
        fetch(`${URL}/contact/${comment.contactId}`)
            .then(res => res.json())
            .then(data => setCommentAuthor(data))
    }, [URL, comment])

    // console.log(commentAuthor)
    if (!commentAuthor) return <p>Unknown author</p>

    const commentInitials = commentAuthor.firstName.slice(0, 1) + commentAuthor.lastName.slice(0, 1)

    return (
        // <section className="comment-content-container grid">
            <li className="single-comment grid">
                <UserProfileCircle userBgColour={userBgColour} author={commentAuthor} initials={commentInitials}></UserProfileCircle>
                <div className="comment-content grid">
                    <h5 className="comment-author-name">{commentAuthor.firstName} {commentAuthor.lastName}</h5>
                    <p className="comment-content-text">{comment.content}</p>
                </div>
            </li>
            
        // {/* </section> */}
            
    )
}

export default PostComments