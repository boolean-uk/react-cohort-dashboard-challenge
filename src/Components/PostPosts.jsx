import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { PostContext } from "../App"

export default function PostPosts(props)
{
    const {author} = props
    const navigate = useNavigate()
    const { addPost } = useContext(PostContext)

    const INITIAL_POST =
    {
        title: "",
        content: ""
    }
    
    const [newPost, setNewPost] = useState(INITIAL_POST)
    const [createPost, setCreatePost] = useState(INITIAL_POST)
    
    
    // POST a new post
    useEffect(() =>
    {
        if (!createPost.contactId)
            return

        const postOptions =
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(createPost)
        }
        
        fetch("https://boolean-api-server.fly.dev/klaand01/post", postOptions)
        .then((response) => response.json())
        .then(() => addPost({newPost}))
    }, [createPost])
    
    const initials = author.firstName.charAt(0) + author.lastName.charAt(0)


    // Helper functions
    const handleInput = (event) =>
    {
        const {name, value} = event.target
        setNewPost({...newPost, [name]: value})
    }

    const handlePost = () =>
    {
        if (newPost.title.length > 0 && newPost.content.length > 0)
        {
            setCreatePost({...newPost, contactId: 1})
            setNewPost(INITIAL_POST)
        }
    }

    return (
        <>
        <div className="postPost">
            <p style={{backgroundColor: author.favouriteColour}} className="circle user" onClick={() => navigate("/user/1")}>{initials}</p>
            <input type="text" name="title" placeholder="Title" onChange={handleInput} value={newPost.title}></input>
            <input type="text" name="content" placeholder="What's on your mind?" onChange={handleInput} value={newPost.content}></input>
            <button type="button" onClick={handlePost}>Post</button>
        </div>
        </>
    )
}