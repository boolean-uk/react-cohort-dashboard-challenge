import { useState } from "react";
import useUsers from "../hooks/useUsers";
import usePosts from "../hooks/usePosts";
import Avatar from "./Avatar";


export default function NewPost() {
    const { user, currentUser } = useUsers
    const {posts, setPosts} = usePosts()
    
    const [newPost, setNewPost] = useState({
        title: '',
        content: '',
        contactId: 0
    })

    function handleChange(e) {
        const {name, value} = e.target
        const title = value.split(' ').slice(0, 5).join(' ')

        setNewPost({
            ...newPost,
            [name] : value,
            title: title,
            contactId: currentUser.id
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        async function addNewPost() {
            const options = {
                method: 'POST',
                body: JSON.stringify(newPost),
                headers: {
                    'Content-type': 'application/json',
                },
            }

            const response = await fetch('https://boolean-api-server.fly.dev/PerikK/post', options)
            const data = await response.json()

            setPostData([
                ...postData,
                data
            ])
        }

        addNewPost()
        
        setNewPost({
            title: '',
            content: '',
            contactId: 0
        })
    }

    return (
        <form className="new-post-form" onSubmit={handleSubmit} >
            <input type="text" placeholder="What's on your mind?" name="content" onChange={handleChange} value={newPost.content}/>
            <button className="post-button">Post</button>
        </form>
    )
}