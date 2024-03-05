import { useContext, useEffect, useState } from "react"
import { AddPostContext } from "./App"
import PostItem from "./Components/PostItem"

export default function HomePage(props)
{
    const {posts} = props
    const { addPost } = useContext(AddPostContext)

    const INITIAL_POST =
    {
        title: "",
        content: "",
        contactId: undefined
    }

    const [newPost, setNewPost] = useState(INITIAL_POST)
    const [createPost, setCreatePost] = useState(INITIAL_POST)

    // POST a new post
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

    // Helper functions
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
        <header>
            <h1 >Cohort Manager</h1>
        </header>
        
        <input type="text" name="title" placeholder="Title" onChange={handleInput} value={newPost.title}></input>
        <input type="text" name="content" placeholder="What's on your mind?" onChange={handleInput} value={newPost.content}></input>
        <button type="button" onClick={handlePost}>Post</button>

        <ul>
            {posts.map((post, index) => (
                <li key={index}>
                    <PostItem post={post}/>
                </li>
            ))}
        </ul>
        </>
    )
}