import ProfileLogo from "../Reusable/profileLogo";
import { useState } from "react";
import { postURL, post, get } from "../client";


export default function PostForm() {

    const [newPost, setNewPost] = useState(
        {
            contactId: 1,
            title: "",
            content: "",
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
        .then (get(`${postURL}`)) 
    }

    return (
        <div className="postForm">
            <ProfileLogo />
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


