import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { AuthorContext, PostContext } from "../App"

export default function PostPosts()
{
    const navigate = useNavigate()
    const { addPost } = useContext(PostContext)
    const { authors } = useContext(AuthorContext)

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


    if (!authors[0])
        return
    
    const initials = authors[0].firstName.charAt(0) + authors[0].lastName.charAt(0)


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
            <p onClick={() => navigate("/user/1")}>{initials}</p>
            <input type="text" name="title" placeholder="Title" onChange={handleInput} value={newPost.title}></input>
            <input type="text" name="content" placeholder="What's on your mind?" onChange={handleInput} value={newPost.content}></input>
            <button type="button" onClick={handlePost}>Post</button>
        </>
    )
}