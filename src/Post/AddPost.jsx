import { useState } from "react"

function AddPost({ setPosts }) {
    const [post, setPost] = useState('')

    const handleChange = (event) => {
        setPost(event.target.value)
    }
    const Submit = (event) => {
        setPosts(post)
        setPost('')
    }

    return (

        <div className="addPost">
            <span className="initials">AB</span>
            <input type="text" value={post} onChange={handleChange} name="comment" placeholder="What's on your mind?" />
            <button onClick={Submit}>Post</button>
        </div>
    )
}

export default AddPost