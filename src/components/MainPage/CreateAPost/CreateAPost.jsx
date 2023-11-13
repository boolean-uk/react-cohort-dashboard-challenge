import { useState } from "react"
import ProfileIcon from "../../Header/ProfileIcon"

function CreatePost (props) {

    const { posts, setPosts } = props

    const [newPost, setNewPost] = useState({contactId: 1, title: "", content: ""})

    function resetForm() {
        setNewPost({contactId: 1, title: "", content: ""})
    }

    function handleSubmit (e) {
        e.preventDefault()

        const data = {
            contactId: 1,
            title: e.target[0].value,
            content: e.target[1].value
        }

        const userName = "TomEastwood"
        const baseUrl = `https://boolean-api-server.fly.dev/${userName}`
        const endpointForPosts = "/post"

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        
        fetch(baseUrl + endpointForPosts, options)
            .then(res => res.json())
            .then(data => setPosts([data, ...posts]))
            .then(resetForm())
    }

    return (
        <div className="create-post">
            <div className= "profile-icon">
                <ProfileIcon />
            </div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name = "title"
                    placeholder="Title"
                    value={newPost.title}
                    onChange={(e) => setNewPost({...posts, [e.target.name]: e.target.value})}
                />
                <input 
                    type="text"
                    name = "content"
                    placeholder="Whats on your mind?..."
                    value={newPost.content}
                    onChange={(e) => setNewPost({...posts, [e.target.name]: e.target.value})}
                />
                <button>Post</button>
            </form>
        </div>
    )
}

export default CreatePost