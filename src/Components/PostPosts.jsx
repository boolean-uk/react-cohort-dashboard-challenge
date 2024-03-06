import PostItem from "./PostItem"
import { useContext, useEffect, useState } from "react"
import { PostContext } from "../App"

export default function PostPosts()
{
    const { posts, addPost } = useContext(PostContext)

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
        <div className="postPosts">
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
        </div>
        </>
    )
}