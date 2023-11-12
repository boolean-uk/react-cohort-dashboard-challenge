import { useState } from "react"

function AddPostForm({ posts, URL, loggedInUser, setShouldGetPosts }) {

    const [newPostText, setNewPostText] = useState('')

    const newPost = {
        id: posts.length + 1,
        contactId: loggedInUser.id,
        title: `${newPostText.slice(0, 30)}...`,
        content: newPostText
    }

    function createNewPost() {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPost)
        }

        fetch(`${URL}/post`, options)
            .then(res => res.json())
            .then(() => setShouldGetPosts(true))
    }

    function handleNewPostSubmit(e) {
        e.preventDefault()
        createNewPost()
        setNewPostText('')
    }

    return (
        <form className="new-post-form grid" onSubmit={handleNewPostSubmit}>
            <label className="new-post-label" htmlFor="create-new-post">
                <input className="new-post-input"
                    type="text"
                    id="create-new-post"
                    name="create-new-post"
                    placeholder="What's on your mind?"
                    onChange={e => setNewPostText(e.target.value)}
                    value={newPostText}
                />
            </label>
            <button className="post-comment-button" type="submit">Post</button>
        </form> 
    )
}

export default AddPostForm