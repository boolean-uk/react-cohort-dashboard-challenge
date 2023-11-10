import { useEffect, useState } from "react"
import { get, contactURL, postURL } from "../client.jsx"
import PostInfo from "./postInfo.jsx";
import CommentContent from "./commentContent.jsx";
import CommentForm from "./commentForm.jsx";



export default function PostFeed() {

    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])

    useEffect(() => {
        get(contactURL)
            .then(data => setUsers(data))

        get(postURL)
            .then(data => setPosts(data))

    }, [])

    return (
        <div className="post">
            <PostInfo users={users} posts={posts} />
            <CommentContent />
            <CommentForm />
        </div>
    )
}