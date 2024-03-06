import { useEffect, useState } from "react"
import { getAuthor } from "../Api"

let InitialAuthor = {
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    jobTitle: "",
}

function CommentListItem({ comment }) {
    const [author, setAuthor] = useState({ ...InitialAuthor })
    useEffect(() => {
        getAuthor(comment.contactId)
            .then((response) => { setAuthor(response) })
    }, [])

    return (
        <div>
            <span className="initials postInitials">{author.firstName[0]}{author.lastName[0]}</span>
            <div className="comment">
                <h1>{author.firstName} {author.lastName}</h1>
                <h2>{comment.content}</h2>
            </div>
        </div>

    )
}

export default CommentListItem