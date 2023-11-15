import UserProfileCircle from "../../Shared/UserProfileCircle"
import SingleCommentNameText from "./SingleCommentNameText"

import { useEffect, useState } from "react"

function SinglePostComments({ comment, URL, post, setShouldGetComments }) {

    const [singleCommentAuthor, setSingleCommentAuthor] = useState(null)

    useEffect(() => {
        fetch(`${URL}/contact/${comment.contactId}`)
            .then(res => res.json())
            .then(data => setSingleCommentAuthor(data))
    }, [URL, comment])

    if (!singleCommentAuthor) return <p>Unknown author</p>

    const commentAuthorInitials = singleCommentAuthor.firstName.slice(0, 1) + singleCommentAuthor.lastName.slice(0, 1)

    return (
        <li className="single-comment grid">
            <UserProfileCircle author={singleCommentAuthor} initials={commentAuthorInitials} />
            <SingleCommentNameText comment={comment} commentAuthor={singleCommentAuthor} URL={URL} post={post} setShouldGetComments={setShouldGetComments} />
        </li>
    )
}

export default SinglePostComments