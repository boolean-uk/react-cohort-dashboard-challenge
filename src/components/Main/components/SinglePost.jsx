import { useEffect, useState } from "react"

function SinglePost({ post, URL }) {

    const [author, setAuthor] = useState(null)

    const id = post.contactId

    useEffect(() => {
            fetch(`${URL}/contact/${id}`)
            .then(res => res.json())
            .then(data => setAuthor(data))
    }, [URL, id])

    console.log(post)

    if (!author) return <p>Unknown Author</p>
    const initials = author.firstName.slice(0, 1) + author.lastName.slice(0, 1)

    return (
        <section className="single-post">
            <li>
                <div>{initials}</div>
                <h4>{post.title}</h4>
                <p>{post.content}</p>
            </li>
        </section>
    )
}

export default SinglePost