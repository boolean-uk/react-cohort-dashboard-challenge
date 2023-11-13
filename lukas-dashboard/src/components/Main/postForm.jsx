import ProfileLogo from "../Reusable/profileLogo";
import { useState } from "react";
import { postURL, post, get } from "../client";


export default function PostForm() {

    const userId = "1"

    const [newPost, setNewPost] = useState(
        {
            title: "",
            content: "",
            contactId: 1,
        })

    const handleChange = (event) => {
        event.preventDefault()

        const value = event.target.value

        setNewPost({
            ...newPost,
            title: value.slice(0, 20) + "...",
            content: value
        })
    }

    const handleSubmit = () => {
        post(`${postURL}`, newPost)
        .then(res => res.json())   
        .then (() => get(`${postURL}`)) 
    }

    return (
        <div className="postForm">
            <ProfileLogo id={userId} />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={(event) => { handleChange(event,) }}
                    placeholder="   Whats on your mind?">
                </input>
                <button type="submit">Post</button>
            </form>
        </div>
    )
}


