import { useContext, useState } from "react"
import { UserContext } from "../../../App"
import { PostContext } from "../../../App"
import './style.css'

function CreatePost() {
    const [postContent, setPostContent] = useState("")
    const [postTitle, setPostTitle] = useState("")
    const [post, setPost] = useState({})

    const userContext = useContext(UserContext)
    const postContext = useContext(PostContext)

    const handleChange = (e) => {
        setPostContent(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        postContext.setPosts([...postContext.posts, 
            {
                id: Math.max(...postContext.posts.map(p => p.id)) +1,
                title: postTitle !== "" ? postTitle : "No title", 
                content: postContent, 
                contactId: userContext.currentUser.id
        }])

        fetch(`https://boolean-api-server.fly.dev/nora-hansen/post`, {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json"},
            body: JSON.stringify(
                {
                    title: postTitle !== "" ? postTitle : "No title", 
                    content: postContent, 
                    contactId: userContext.currentUser.id
                })
        })
            .then(response => response.json())
        setPostContent("")
    }

    return(
        <div >
            <form className="create-post" onSubmit={handleSubmit}>
                <div 
                    style={{backgroundColor: `${userContext.currentUser.favouriteColour}`}}
                    className="profile-pic"
                >
                        {userContext.currentUser.firstName[0]}{userContext.currentUser.lastName[0]}
                </div>
                <input type="text" placeholder="What's on your mind?" onChange={handleChange} value={postContent}/>
                <button>Post</button>
            </form>
        </div>
    )
}

export default CreatePost