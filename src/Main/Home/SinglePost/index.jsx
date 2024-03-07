import { useContext, useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { PostContext } from "../../../App"
import Post from "../Timeline/Post"

function SinglePost() {
    const id = useParams()
    const postContext = useContext(PostContext)

    const [post, setPost] = useState(null)
    useEffect(() => {
        setPost(postContext.posts.filter((post) => Number(post.id) === Number(id.id)))

        console.log("Hey post!", id.id)
    }, [])

    if (post === null) return <p>Loading post...</p>

    return(
        <Post post={post[0]} />
    )
}

export default SinglePost