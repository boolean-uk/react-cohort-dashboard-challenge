/* eslint-disable react/prop-types */
import ProfileLogo from "../Reusable/profileLogo";
import { useContext, useState } from "react";
import { postURL, post, get } from "../client";
import { UserAndPostContext } from "../../App";


export default function PostForm() {
    const { setPosts } = useContext(UserAndPostContext)

    const userId = "1"

    const [newPost, setNewPost] = useState(
        {
            title: "",
            content: "",
            contactId: 1,
        })

    const handleChange = (event) => {

        const value = event.target.value

        setNewPost({
            ...newPost,
            title: value.slice(0, 20) + "...",
            content: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        event.target.reset()

        post(`${postURL}`, newPost)
            .then(res => res.json())
            .then(() => get(`${postURL}`))
            .then(setPosts)
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


