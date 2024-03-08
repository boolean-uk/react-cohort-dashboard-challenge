import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import '../../dashboard.css';


function NewComment({ user, baseURL, postId }){
    //const postId = postId
    const contactId = user.id

    const [newComment, setNewComment] = useState({
        postId: +postId,
        contactId: contactId,
        content: ""
    })
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault()
        console.log(newComment)
        fetch(`${baseURL}/post/${postId}/comment`,
        {method: 'POST',
        headers: { 'Content-Type': 'application/json',},
        body: JSON.stringify(newComment),
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        newComment.content = ""
        })
        navigate(`/`)
    }

    return(
        <>
            <div className="new-comment-card">
                <h3>Comment on Post</h3>
                <button className="post-icon">
            <img src={user.profileImage}/>
            </button>
            <form onSubmit={handleSubmit} className="new-comment-form">
            <div className="form-group">
                <label htmlFor="content" className="form-label" content>Content </label>
                <textarea
                    className="form-control"
                    type="text"
                    rows={4} 
                    cols={40}
                    id="content"
                    name="content"
                    onChange={e => setNewComment(prevPost => ({ ...prevPost, [e.target.name]: e.target.value }))}
                    value={newComment.content}
                />
                </div>
                <button type="submit" className="submit-comment">Post Comment </button>
            </form>
            </div>
        </>

    )
}
export default NewComment