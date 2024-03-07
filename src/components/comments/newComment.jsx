import { useState } from "react"
import { useNavigate } from 'react-router-dom'


function NewComment({ user, baseURL, postId }){
    //const postId = postId
    const contactId = user.id

    const [newComment, setNewComment] = useState({
        postId: postId,
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
            <div className="yellow">
                <h3>Comment on Post</h3>
                <button className="sidebar-icons">
            <img src={user.profileImage}/>
            </button>
            <form onSubmit={handleSubmit}>
                <label htmlFor="content">content </label>
                <textarea
                    type="text"
                    rows={4} 
                    cols={40}
                    id="content"
                    name="content"
                    onChange={e => setNewComment(prevPost => ({ ...prevPost, [e.target.name]: e.target.value }))}
                    value={newComment.content}
                />
                <p></p>
                <button type="submit">Comment </button>
            </form>
            </div>
        </>

    )
}
export default NewComment