import { useState } from "react";
import ProfileIcon from "../../Header/ProfileIcon"
import './AddComment.css'

const initial_state = {
    contactId: 1,
    title: "",
    content: ""
}

function AddComment (props) {

    const { post } = props

    const [newComment, setNewComment] = useState(initial_state)

    function handleSubmit(e) {
        e.preventDefault()

        const data = {
            contactId: 1,
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
                .then(data => setNewComment(data))
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
                        onChange={(e) => setNewComment({...newComment, [e.target.name]: e.target.value})}
                    />
                </form>
            </div>
            <div className = "comment-button">
                <button type="submit">Post</button>
            </div>  
        </div>
    )
}

export default AddComment