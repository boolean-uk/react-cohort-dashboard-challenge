import { useContext, useState } from "react"
import { AppContext } from '../App'
import UserCircle from './UserCircle'

function CreatePost() {
    const initialPost = "What's on your mind?"
    const { user, posts, setPosts } = useContext(AppContext)
    const [newPost, setNewPost] = useState(initialPost)

    const handleChange = (event) => {
        const { value } = event.target 
        setNewPost(value);
    }

    const makePost = async () => {
        const postData = {
            contactId: user.id,
            title: "New post",
            content: ""
        }
        
        postData.content = newPost
        const response = await fetch("https://boolean-uk-api-server.fly.dev/tvaltn/post", {
            method: "POST",
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
        })
        const jsonData = await response.json()
        console.log(jsonData)
        
        setPosts([...posts, jsonData])
        setNewPost(initialPost)
    }

    return(
        <section className="createPost">
            <UserCircle user={user}/>
            <input
            type="text"
            name="postInput"
            value={newPost}
            onChange={handleChange}
            />
            <button onClick={makePost}>
                Post
            </button>

        </section>
    )
}

export default CreatePost