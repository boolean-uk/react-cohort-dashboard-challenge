import { useState } from "react";
import Pfp from '../../shared-components/Pfp/profilePicture'
import { post, get } from "../../controller";

const postApi = "https://boolean-api-server.fly.dev/Radio58/post";

const data = {
    title: "",
    content: "",
    contactId: 0
}

export default function CreatePost({ user, setPosts }) {
    const [newPost, setPost] = useState(data)

    const getPosts = () => {
        get(postApi).then((data) => setPosts(data));
    }
    
    const handleChange = (e) => {
        const info = {
            title: "interesting title woo",
            content: e.target.value,
            contactId: user.id
        }
        setPost(info)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        post(postApi, newPost)
        .then(() => getPosts())
    }

    return (
        <>
        <div className="create-post">
            <Pfp
                userInfo={user}
            />
            <form className="post-form" onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder="What's on your mind?" onChange={(e) => handleChange(e) }/>
                <button type="submit">Post</button>
            </form>
        </div>
        </>
    )
}

