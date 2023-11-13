import { useState } from "react";
import ProfileIcon from "../../Header/ProfileIcon"
import './AddComment.css'

const initial_state = {
    contactId: 1,
    title: "",
    content: ""
}

let contactId = 1

function AddComment (props) {

    const { post } = props

    const [comments, setComments] = useState(initial_state)

    console.log("comments", comments);

    const postId = post.id

    function resetForm() {
        setComments(initial_state)
    }

    function handleSubmit(e) {
        e.preventDefault()

        const data = {
            contactId: contactId,
            postId: postId,
            content: e.target[0].value
        }

        const userName = "TomEastwood"
            const baseUrl = `https://boolean-api-server.fly.dev/${userName}`
            const endpointForComments = `/post/${postId}/comment`
    
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
            fetch(baseUrl + endpointForComments, options)
                .then(res => res.json())
                .then(data => setComments(data))
                .then(resetForm())
    }

    console.log("new comment added", comments);

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
                        value={comments.content}
                        onChange={(e) => setComments({...comments, [e.target.name]: e.target.value})}
                    />
                        <button type="submit">Post</button> 
                </form>
            </div>
        </div>
    )
}

export default AddComment