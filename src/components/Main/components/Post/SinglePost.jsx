import { useEffect, useState } from "react"

import PostContent from "./PostContent"
import CommentContent from "../Comment/CommentContent"

function SinglePost({ post, URL, loggedInUser, loggedInUserInitials }) {

    const [author, setAuthor] = useState(null)

    const postId = post.contactId

    useEffect(() => {
            fetch(`${URL}/contact/${postId}`)
            .then(res => res.json())
            .then(data => setAuthor(data))
    }, [URL, postId])

    if (!author) return <p>Loading post...</p>

    const initials = author.firstName.slice(0, 1) + author.lastName.slice(0, 1)

    return (
        <section className="single-post-container">
            <li className="single-post grid">
                <PostContent post={post} author={author} initials={initials} />
                <CommentContent post={post} URL={URL} loggedInUser={loggedInUser} loggedInUserInitials={loggedInUserInitials} />
            </li>
        </section>
    )
}

export default SinglePost