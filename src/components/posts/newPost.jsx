import { useNavigate } from 'react-router-dom'
import { useState } from "react";

function NewPost({ user, baseURL }){

    const id = user.id

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
        newPost.contactId = "",
        newPost.title = "",
        newPost.content = ""
        })
        navigate(`/`)
    }



    return(
        <>
            <div className="yellow">
                <h2>New Post</h2>
                <button className="sidebar-icons">
            <img src={user.profileImage}/>
            </button>
            <form onSubmit={handleSubmit}>
            <label htmlFor="title">title </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    onChange={e => setNewPost(prevPost => ({ ...prevPost, [e.target.name]: e.target.value }))}
                    value={newPost.title}
                />
                <p></p>
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
                <p></p>
                <button type="submit">Post</button>
            </form>
            </div>
        </>
    )
}
export default NewPost