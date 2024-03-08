import { useContext, useEffect, useState } from "react"
import { getAuthor, updatePost } from "../Api"
import { useNavigate } from "react-router-dom"
import { PostContext } from "../App"

let InitialAuthor = {
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    jobTitle: "",
}
function PostListItemText({ post, removePost }) {
    const [author, setAuthor] = useState({ ...InitialAuthor })
    const [isEditing, setIsEditing] = useState(false)
    const { posts, setPosts } = useContext(PostContext)
    const navigate = useNavigate()

    useEffect(() => {
        getAuthor(post.contactId)
            .then((response) => { setAuthor(response) })
    }, [post])

    const editPost = (event) => {
        setIsEditing(true)
    }

    const saveEdit = (event) => {
        updatePost(post.id, post)
        setIsEditing(false)
    }

    const handleChange = (event) => {
        post[event.target.name] = event.target.value
        setPosts([...posts])
    }

    return (
        <div className="postTop">
            <span className="initials postInitials" onClick={() => { navigate(`/profile/${post.contactId}`) }}>{author.firstName[0]}{author.lastName[0]}</span>
            <div>
                <h1 className="closeButton" onClick={() => removePost(post)}>X</h1>
                {!isEditing && <button className="editButton" onClick={editPost}> Edit</button>}
                {isEditing && <button className="editButton" onClick={saveEdit}> Save</button>}

            </div>
            <h1 className="postHead" onClick={() => { navigate(`/profile/${post.contactId}`) }}>{author.firstName} {author.lastName}</h1>
            {!isEditing && <h2 className="postHead" onClick={() => navigate(`/post/${post.id}`)}>{post.title}</h2>}
            {!isEditing && <h2 className="postText" onClick={() => navigate(`/post/${post.id}`)}>{post.content}</h2>}
            {isEditing && <label>Title:<input name="title" onChange={handleChange} value={post.title} /></label>}
            {isEditing && <textarea name="content"
                onChange={handleChange}
                type='text'
                value={post.content}
                cols='90'
                rows='10' />}

        </div>
    )
}

export default PostListItemText