/* eslint-disable react/prop-types */
import { useState } from "react"

export default function CreateNewPost() {

    const newPost = {
        title: "",
        content: "",
        contactId: 1
    }

    const [postForm, setPostForm] = useState(newPost)

    function handleInput(event) {
        const postInput = {...postForm}
        postInput[event.target.name] = event.target.value
        setPostForm(postInput)
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(postForm)
        postToDB()
        location.reload()
    }

    const postToDB = async () => {
        const reqOptions = {
            method: 'POST',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(postForm)
        }
        await fetch("https://boolean-api-server.fly.dev/mkmbaran/post", reqOptions)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>New Post</h2>
            <label htmlFor="title">Give your post a title</label>
            <br/>
            <input
                type="text"
                id="title"
                name="title"
                placeholder="Give your post a title..."
                value={postForm.title}
                onChange={handleInput}
                required
            />
            <br/>
            <label htmlFor="content">Write your post below</label>
            <br/>
            <input
                type="textarea"
                id="content"
                name="content"
                placeholder="Fill out your post body here..."
                value={postForm.content}
                onChange={handleInput}
                required
            />
            <br/>
            <button type="submit">Post</button>
        </form>
    )
}