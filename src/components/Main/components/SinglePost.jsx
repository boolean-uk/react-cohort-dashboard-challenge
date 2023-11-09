import { useEffect, useState } from "react"

import PostContent from "./PostContent"
import Comments from "./Comments"

function SinglePost({ post, URL }) {

    const [author, setAuthor] = useState(null)

    const id = post.contactId

    useEffect(() => {
            fetch(`${URL}/contact/${id}`)
            .then(res => res.json())
            .then(data => setAuthor(data))
    }, [URL, id])

    // console.log(post)

    if (!author) return <p>Unknown Author</p>

    return (
        <section className="single-post-container">
            <li className="single-post grid">
                <PostContent post={post} author={author}></PostContent>
                <Comments></Comments>
            </li>
        </section>
    )
}

export default SinglePost