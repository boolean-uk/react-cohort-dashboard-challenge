import { useState, useContext } from "react"

import { PostContext } from "../App"

function CreatePost() {
    const [newPost, setNewPost] = useState({ id: 20, contactId: 1, title: '', content: '' })
    const { posts, setPosts } = useContext(PostContext)

    const handleChange = (e) => {
        const inputName = e.target.name
        const inputValue = e.target.value

        setNewPost({ ...newPost, [inputName]: inputValue })
    }

    const addNewPost = (e) => {
        e.preventDefault()

        //Skicka POST request till api att lägga till ny post
        fetch(`https://boolean-api-server.fly.dev/alexandra7667/post`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPost)
        })

        //uppdatera posts att innehålla den nya posten. funkar re-rendering
        setPosts((post) => [...post, newPost]);

        //cleara input fields
        setNewPost({ id: 20, contactId: 1, title: '', content: '' })
    }

    return (
        <div className="create-post">
            <img src="" alt="" />
            <input
                type="text"
                name="title"
                placeholder="Enter title..."
                value={newPost.newPostTitle}
                onChange={handleChange} />
            <br />
            <input
                type="text"
                name="content"
                placeholder="Enter content..."
                value={newPost.newPostContent}
                onChange={handleChange} />
            <button className="create-post-button"
                onClick={addNewPost}>
                Post
            </button>
        </div>
    )
}

export default CreatePost