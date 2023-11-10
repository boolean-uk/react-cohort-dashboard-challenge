import { useEffect, useState } from "react"

import PostContent from "./PostContent"
import Comments from "./Comments"

function SinglePost({ post, URL, loggedInUserColour }) {

    const [author, setAuthor] = useState(null)

    const postId = post.contactId

    useEffect(() => {
            fetch(`${URL}/contact/${postId}`)
            .then(res => res.json())
            .then(data => setAuthor(data))
    }, [URL, postId])

    // console.log(post)

    if (!author) return <p>Unknown Author</p>

    return (
        <section className="single-post-container">
            <li className="single-post grid">
                <PostContent post={post} author={author} loggedInUserColour={loggedInUserColour} />
                <Comments />
            </li>
        </section>
    )
}

export default SinglePost