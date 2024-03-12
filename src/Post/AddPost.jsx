import { useContext, useState } from "react"
import { NameContext } from "../App"

const INITIAL_POST = {
    title: '',
    content: ''
}

function AddPost({ setPosts }) {
    const [post, setPost] = useState({ ...INITIAL_POST })
    const { initials } = useContext(NameContext)

    const handleChange = (event) => {
        post[event.target.name] = event.target.value
        setPost({ ...post })
    }
    const Submit = (event) => {
        event.preventDefault()
        setPosts(post)
        setPost({ ...INITIAL_POST })
    }

    return (

        <form className="addPost" onSubmit={Submit}>
            <span className="initials postInitials">{initials}</span>
            <input type="text" value={post.title} onChange={handleChange} name="title" placeholder="Subject" required />
            <input type="text" value={post.content} onChange={handleChange} name="content" placeholder="What's on your mind?" required />
            <input className="postButton" type="submit" value="Post" />
        </form>
    )
}

export default AddPost