import { useEffect, useState } from "react"
import { getAuthor } from "../Api"

let InitialAuthor = {
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    jobTitle: "",
}
function PostListItemText({ post }) {
    const [author, setAuthor] = useState({ ...InitialAuthor })
    useEffect(() => {
        getAuthor(post.contactId)
            .then((response) => { setAuthor(response) })
    }, [])

    return (
        <div>
            <span className="initials postInitials">{author.firstName[0]}{author.lastName[0]}</span>
            <h1 className="postHead">{author.firstName} {author.lastName}</h1>
            <h2 className="postHead">{post.title}</h2>
            <h2 className="postText">{post.content}</h2>
        </div>
    )
}

export default PostListItemText