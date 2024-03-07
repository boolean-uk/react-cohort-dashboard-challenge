import { useContext, useState } from "react"
import { UserContext } from "../../../App"
import { PostContext } from "../../Home"

import './style.css'

function CreatePost() {
    const [postContent, setPostContent] = useState("")
    const [post, setPost] = useState({})

    const userContext = useContext(UserContext)
    const postContext = useContext(PostContext)

    const handleChange = (e) => {
        setPostContent(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setPost({title: "", content: postContent, contactId: userContext.users[0].id})

        fetch(`https://boolean-api-server.fly.dev/nora-hansen/post`, {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json"},
            body: JSON.stringify(
                {
                    title: "", 
                    content: postContent, 
                    contactId: userContext.users[0].id
                })
        })
            .then(response => response.json())
            .then(response => console.log(response))

        postContext.setPosts([...postContext.posts, post])

        setPostContent("")
    }

    return(
        <div >
            <form className="create-post" onSubmit={handleSubmit}>
                <div 
                    style={{backgroundColor: `${userContext.users[0].favouriteColour}`}}
                className="profile-pic">{userContext.users[0].firstName[0]}{userContext.users[0].lastName[0]}</div>
                <input type="text" placeholder="What's on your mind?" onChange={handleChange} value={postContent}/>
                <button>Post</button>
            </form>
        </div>
    )
}

export default CreatePost