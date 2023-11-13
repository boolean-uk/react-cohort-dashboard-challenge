import { useState } from "react";
import ProfileIcon from "../../Header/ProfileIcon"
import './AddComment.css'

function AddComment (props) {

    const { post, comments, setComments } = props

    const [newComment, setNewComment] = useState({contactId: 1, postId: post.id, content: ""})

    function resetForm() {
        setNewComment(initial_state)
    }

    function handleSubmit(e) {
        e.preventDefault()

        const data = {
            contactId: 1,
            postId: post.id,
            content: e.target[0].value
        }

        const userName = "TomEastwood"
        const baseUrl = `https://boolean-api-server.fly.dev/${userName}`
        const endpointForComments = `/post/${post.id}/comment`
    
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }

            fetch(baseUrl + endpointForComments, options)
                .then(res => res.json())
                .then(data => setComments([...comments, data]))
                .then(resetForm())
    }

    return (
        <div className="add-comment">
            <div className= "profile-icon">
                <ProfileIcon />
            </div>
            <div className = "comment-form">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        name = "content"
                        placeholder="Add a comment..."
                        value={newComment.content}
                        onChange={(e) => setNewComment({...comments, [e.target.name]: e.target.value})}
                    />
                        <button type="submit">Post</button> 
                </form>
            </div>
        </div>
    )
}

export default AddComment