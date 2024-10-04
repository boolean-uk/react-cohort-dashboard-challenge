import ContactCircle from "../ContactCircle"
import { useState } from "react"
import { useContactsPosts } from "../context/ContactPostContext"

export default function CreatePost() {
    const [title, setTitle] = useState('')
    const [postContent, setPostContent] = useState('')
    const { user, posts, setPosts } = useContactsPosts()

    const handlePost = (e) => {
        e.preventDefault()

        const newPost = {
            title: title,
            content: postContent,
            contactId: user.id
        }
        
        fetch("https://boolean-uk-api-server.fly.dev/OliverLundhAndersson/post", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPost)
        })
        .then((response) => response.json())
        .then((createdPost) => {
            setPosts([createdPost, ...posts])
        })
            .catch((err) => console.error(err))

        setPostContent('')
        setTitle('')
    }

    return (
        <div className="create-post">
        <form onSubmit={handlePost} className="create-post-form">
            <ContactCircle contact={user} showName={false} />
            <div>
                <input 
                    className="post-input"
                    type="text" 
                    placeholder="Title" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required 
                />
                <input 
                    className="post-input"
                    type="text" 
                    placeholder="What's on your mind?" 
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    required 
                />
            </div>
            <button className="create-post-button" type="submit">Post</button>
        </form>
        </div>
    )
}
