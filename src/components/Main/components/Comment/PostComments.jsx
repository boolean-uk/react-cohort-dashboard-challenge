import { useEffect, useState } from "react"
import UserProfileCircle from "../../../Shared/UserProfileCircle"
import CommentNameText from "./CommentNameText"

function PostComments({ comment, URL }) {

    const [commentAuthor, setCommentAuthor] = useState(null)

    useEffect(() => {
        if (comment) {
            fetch(`${URL}/contact/${comment.contactId}`)
            .then(res => res.json())
            .then(data => setCommentAuthor(data))
        }
        else return <p>no comment</p>
    }, [URL, comment])

    if (!commentAuthor) return <p>Unknown author</p>

    const commentInitials = commentAuthor.firstName.slice(0, 1) + commentAuthor.lastName.slice(0, 1)

    return (
        <li className="single-comment grid">
            <UserProfileCircle author={commentAuthor} initials={commentInitials} />
            <CommentNameText comment={comment} commentAuthor={commentAuthor} />
        </li>
    )
}

export default PostComments