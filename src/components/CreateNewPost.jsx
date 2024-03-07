/* eslint-disable react/prop-types */
import { useContext, useState } from "react"
import { MyContext } from "../App"

export default function CreateNewPost() {
    const context = useContext(MyContext)

    const newPost = {
        title: "",
        content: "",
        contactId: 1
    }

    const [postForm, setPostForm] = useState(newPost)

    const contact = context.contacts.find((x) => x.id === newPost?.contactId)

    function handleInput(event) {
        const postInput = {...postForm}
        postInput[event.target.name] = event.target.value
        setPostForm(postInput)
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(postForm)
        postToDB()
    }

    const postToDB = async () => {
        const reqOptions = {
            method: 'POST',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(postForm)
        }
        await fetch("https://boolean-api-server.fly.dev/mkmbaran/post", reqOptions)
    }

    if (!contact) return <p>Loading post author...</p>

    return (
        <form onSubmit={handleSubmit}>
        <ul className="card">
        <img src={contact.profileImage}/>
            <li>
            <label htmlFor="title">Give your post a title </label>
            <input
                type="text"
                id="title"
                name="title"
                placeholder="Topic"
                value={postForm.title}
                onChange={handleInput}
                required
            />
            </li>
           <li>
            <br/>
            <input
                type="text"
                id="content"
                name="content"
                placeholder="What's on your mind?"
                value={postForm.content}
                onChange={handleInput}
                required
            />
           </li>
           <br/>
            <li>
            <button type="submit">Create a new post</button>
            </li>
        </ul>
        </form>
    )
}