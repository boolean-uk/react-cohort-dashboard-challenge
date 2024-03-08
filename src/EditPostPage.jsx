import { useNavigate, useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { PostContext } from "./App"

export default function EditPostPage()
{
    const {id} = useParams()
    const navigate = useNavigate()
    const {posts, editPost} = useContext(PostContext)
    
    const INITIAL_POST =
    {
        title: "",
        content: ""
    }
    const [post, setPost] = useState(undefined)
    const [newPost, setNewPost] = useState(INITIAL_POST)
    const [updatePost, setUpdatePost] = useState(INITIAL_POST)

    // PUT an updated post
    useEffect(() =>
    {
        if (!updatePost.id)
            return

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
            editPost({updatePost})
            navigate("/")
        })
    }, [updatePost])
    
    if (!post)
    {
        posts.map((post) => 
        {
            if (post.id === parseInt(id))
                setPost(post)
        })
    }

    const handleInput = (event) =>
    {
        const {name, value} = event.target
        setNewPost({...newPost, [name]: value})
    }

    const handleClick = () =>
    {
        const updatedPost = newPost
        
        // Setting default values if not updated
        if (updatedPost.title.length === 0)
            updatedPost.title = post.title
    
        if (updatedPost.content.length === 0)
            updatedPost.content = post.content

        updatedPost.id = post.id
        updatedPost.contactId = 1
        setUpdatePost({...updatedPost})
    }

    return (
        <>
        <h1 className="editPost">Edit post</h1>
        <input type="text" name="title" placeholder={post && post.title} onChange={handleInput} value={newPost.title}></input>
        <input type="text" name="content" placeholder={post && post.content} onChange={handleInput} value={newPost.content}></input>
        <button onClick={handleClick}>Save</button>
        </>
    )
}