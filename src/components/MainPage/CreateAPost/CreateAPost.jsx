import { useState } from "react"
import ProfileIcon from "../../Header/ProfileIcon"

const initial_state = {
    contactId: 1,
    title: "",
    content: ""
}

function CreatePost () {

    const [posts, setPosts] = useState(initial_state)

    console.log("posts", posts);

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
            .then(data => setPosts(data))
    }

    console.log("new post added", posts);

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
                    value={posts.title}
                    onChange={(e) => setPosts({...posts, [e.target.name]: e.target.value})}
                />
                <input 
                    type="text"
                    name = "content"
                    placeholder="Whats on your mind?..."
                    value={posts.content}
                    onChange={(e) => setPosts({...posts, [e.target.name]: e.target.value})}
                />
                <button>Post</button>
            </form>
        </div>
    )
}

export default CreatePost