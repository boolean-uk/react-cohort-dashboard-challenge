import { useContext, useEffect, useState } from "react"
import { AddPostContext } from "../HomePage";

export default function PostPosts()
{
    const { addPost } = useContext(AddPostContext)

    const INITIAL_POST =
    {
        title: "",
        content: "",
        contactId: undefined
    }

    const [newPost, setNewPost] = useState(INITIAL_POST)
    const [createPost, setCreatePost] = useState(INITIAL_POST)

    useEffect(() =>
    {
        const postOptions =
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(createPost)
        }
        
        fetch("https://boolean-api-server.fly.dev/klaand01/post", postOptions)
    }, [createPost])

    const handleInput = (event) =>
    {
        const {name, value} = event.target
        setNewPost({...newPost, [name]: value, contactId: 1})
    }

    const handlePost = () =>
    {
        if (newPost.title.length > 0 && newPost.content.length > 0)
        {
            addPost({newPost})
            setCreatePost(newPost)
            setNewPost(INITIAL_POST)
        }
    }

    return (
        <>
        <input type="text" name="title" placeholder="Title" onChange={handleInput} value={newPost.title}></input>
        <input type="text" name="content" placeholder="What's on your mind?" onChange={handleInput} value={newPost.content}></input>
        <button onClick={handlePost}>Post</button>
        </>
    )
}