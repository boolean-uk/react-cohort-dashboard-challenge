import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import '../../dashboard.css';

function NewPost({ user, baseURL }){

    const id = +user.id

    const [newPost, setNewPost] = useState({
        contactId: id,
        title: "",
        content: "",
    });
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault()
        console.log(newPost)
        fetch(`${baseURL}/post`,
        {method: 'POST',
        headers: { 'Content-Type': 'application/json',},
        body: JSON.stringify(newPost),
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        setNewPost({ contactId: id, title: "", content: "" });
        })
        navigate(`/`)
    }

    return(
        <>
            <div className="new-post-card">
                <h2>New Post</h2>
                <button className="post-icon">
            <img src={user.profileImage}/>
            </button>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
            <label htmlFor="title">title </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    onChange={e => setNewPost(prevPost => ({ ...prevPost, [e.target.name]: e.target.value }))}
                    value={newPost.title}
                />
                </div>
                <div className="form-group">
                <label htmlFor="content">content </label>
                <textarea
                    type="text"
                    rows={4} 
                    cols={40}
                    id="content"
                    name="content"
                    onChange={e => setNewPost(prevPost => ({ ...prevPost, [e.target.name]: e.target.value }))}
                    value={newPost.content}
                />
                </div>
                <button type="submit" className="submit-comment">Post</button>
            </form>
            </div>
        </>
    )
}
export default NewPost