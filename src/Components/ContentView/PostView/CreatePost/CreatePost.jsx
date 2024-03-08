import "./CreatePost.css"
import { useState, useContext } from 'react'
import AccountIcon from "@/Components/AccountIcon/AccountIcon.jsx"
import { userContext, PostsContext } from '@/Utils/contexts'
import { basePostUrl } from "@/Utils/apiUtils"

const CreatePost = () => {
    const [postObject, setPostObject] = useState({
        title: localStorage.getItem("post_in_progress_title") || "",
        content: localStorage.getItem("post_in_progress_content") || ""
    })
    const { LoggedInUser } = useContext(userContext)
    const { fetchPosts } = useContext(PostsContext)
    
    const handleChangeEvent = (e) => {
        // If field turns to "" remove the localstorage field, makes it much cleaner.
        if (e.target.value === "") {
            localStorage.removeItem(`post_in_progress_${e.target.id}`)
        } else {
            localStorage.setItem(`post_in_progress_${e.target.id}`, e.target.value)
        }
        setPostObject({...postObject, [e.target.id]: e.target.value})
    }

    const submitPost = async (e) => {
        e.preventDefault()
        const request = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({...postObject, contactId: LoggedInUser.id})
        }
        await fetch(basePostUrl, request)
        await fetchPosts()
        localStorage.removeItem("post_in_progress_title")
        localStorage.removeItem("post_in_progress_content")
        setPostObject({title: "", content: ""})
    }

    return (
        <div 
            className="create-post-container"
            style={{height: postObject["title"] ? "160px": "80px"}}
        >
            <AccountIcon user={LoggedInUser}/>
            <div className="create-post-input-container">
                <label>
                    <input
                        id="title"
                        type="text"
                        placeholder="What's on your mind?"
                        value={postObject["title"]}
                        onChange={(e) => handleChangeEvent(e)}
                    />
                </label>
                {postObject["title"] && <label>
                    <input
                        id="content"
                        type="text"
                        placeholder="Write post content here"
                        value={postObject["content"]}
                        onChange={(e) => handleChangeEvent(e)}
                    />
                    </label>
                }
            </div>
            <button onClick={(e) => submitPost(e)}>
                Post
            </button>
        </div>
    )
}

export default CreatePost