import { useContext, useEffect, useState } from "react"
import Post from "./Post"
import { AppContext } from "../App"
import { useParams } from "react-router-dom"

function PostPage() {
    const { contacts, posts } = useContext(AppContext)
    const [post, setPost] = useState(null)
    const { id } = useParams()


    // Set the post to the post with the correct id
    useEffect(() => {
        const postId = parseInt(id)
        setPost(posts.find(post => post.id === postId))
    }, [id, posts])

    if(!post) {
        return <div>Loading...</div>
    }

    return (
        <>
        <div className="Posts">
            <Post post={post} contact={contacts.find(contact => contact.id === post.contactId)}/>
        </div>
        </>
    )
}

export default PostPage