import { useNavigate, useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { PostContext } from "./App"

export default function EditPostPage()
{
    const {id} = useParams()
    const navigate = useNavigate()
    const {posts, editPost} = useContext(PostContext)
    const post = posts[posts.length - id]
    
    const INITIAL_POST =
    {
        title: "",
        content: "",
        contactId: 1
    }
    const [newPost, setNewPost] = useState(INITIAL_POST)
    const [updatePost, setUpdatePost] = useState(INITIAL_POST)

    // PUT an updated post
    useEffect(() =>
    {
        const putOptions =
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        }
        
        fetch(`https://boolean-api-server.fly.dev/klaand01/post/${updatePost.id}`, putOptions)
        .then((response) => response.json())
        .then(() => {
            if (updatePost.id !== undefined) navigate("/")
        })
    }, [updatePost])
    
    if (!post)
        return

    const handleInput = (event) =>
    {
        const {name, value} = event.target
        setNewPost({...newPost, [name]: value, id: post.id})
    }

    const handleClick = () =>
    {
        const updatedPost = newPost
        
        if (updatedPost.title.length === 0)
            updatedPost.title = post.title
    
        if (updatedPost.content.length === 0)
            updatedPost.content = post.content

        if (updatedPost.id === undefined)
            updatedPost.id = post.id
        
        editPost({updatedPost})
        setUpdatePost({...updatedPost})
    }

    return (
        <>
        <h1 className="editPost">Edit post</h1>
        <input type="text" name="title" placeholder={post.title} onChange={handleInput} value={newPost.title}></input>
        <input type="text" name="content" placeholder={post.content} onChange={handleInput} value={newPost.content}></input>
        <button onClick={handleClick}>Save</button>
        </>
    )
}