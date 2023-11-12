import { useEffect, useState } from "react"
import UserProfileCircle from "../../../Shared/UserProfileCircle"
import CommentNameText from "./CommentNameText"

function PostComments({ showComments, comment, URL, userBgColour }) {

    const [commentAuthor, setCommentAuthor] = useState(null)

    useEffect(() => {
        fetch(`${URL}/contact/${comment.contactId}`)
            .then(res => res.json())
            .then(data => setCommentAuthor(data))
    }, [URL, comment])

    if (!commentAuthor) return <p>Unknown author</p>

    const commentInitials = commentAuthor.firstName.slice(0, 1) + commentAuthor.lastName.slice(0, 1)

    return (
            <li className="single-comment grid">
                <UserProfileCircle userBgColour={userBgColour} author={commentAuthor} initials={commentInitials} />
                <CommentNameText comment={comment} commentAuthor={commentAuthor} />
            </li>
    )
}

export default PostComments