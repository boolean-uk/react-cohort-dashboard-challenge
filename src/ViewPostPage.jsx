import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function ViewPostPage(props)
{
    const {posts} = props
    const {id} = useParams()
    const [comments, setComments] = useState([])
    const [author, setAuthor] = useState({})
    const post = posts[posts.length - id]

    const navigate = useNavigate()

    // GET the comments
    useEffect(() =>
    {
        fetch(`https://boolean-api-server.fly.dev/klaand01/post/${id}/comment`)
        .then((response) => response.json())
        .then((data) => setComments(data))
    }, [id])

    // GET the author
    useEffect(() =>
    {
        if (post)
        {
            fetch(`https://boolean-api-server.fly.dev/klaand01/contact/${post.contactId}`)
            .then((response) => response.json())
            .then((data) => setAuthor(data))
        }
    }, [post])

    return (
        <>
        <h1>{post && post.title}</h1>
        <h2>{author && author.firstName} {author && author.lastName}</h2>
        <ul>
            {comments.map((comment, index) => (
                <li key={index}>{comment.content}</li>
            ))}
        </ul>
        <button onClick={() => navigate("/")}>Go Back</button>
        </>
    )
}