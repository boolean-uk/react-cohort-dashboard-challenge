import Pfp from '../../shared-components/Pfp/profilePicture';
import { useState } from "react";
import { post, get } from "../../controller";

const postApi = "https://boolean-api-server.fly.dev/Radio58/post";

const data = {
    postId: 0,
    content: "",
    contactId: 0
}

export default function CreateComment({ user, setComments, PID }) {
    const [newComment, setComment] = useState(data)

    const getComments = () => {
        get(`${postApi}/${PID}/comment`).then((data) => {
            setComments(data)
        })
    }
    
    const handleChange = (e) => {
        const info = {
            postId: PID,
            content: e.target.value,
            contactId: user.id
        }
        setComment(info)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        post(`${postApi}/${PID}/comment`, newComment)
        .then(() => getComments())
    }

    return (
        <>
        <div className="create-comment">
            <Pfp
                userInfo={user}
            />
            <form className="comment-form" onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder="What's on your mind?" onChange={(e) => handleChange(e) }/>
                <button type="submit">Post</button>
            </form>
        </div>
        </>
    )
}

