import { CohortContext } from "@/App"
import { useContext, useEffect, useState } from "react"

import "./styles.css"
import PostHeader from "./components/PostHeader"
import PostAddCommentForm from "./components/PostAddCommentForm"
import CommentList from "./components/CommentList"

export default function Post({post}) {
    const { users } = useContext(CohortContext)

    const [ user, setUser ] = useState(null)
    const [comments, setComments] = useState([])

    useEffect(() => {
        setUser(users.find(user => user.id === post.contactId))

        fetch("https://boolean-api-server.fly.dev/Agatland/post")
        .then(res => res.json())
        .then(data => setComments(data))
    }, [users])

    if (!user) return <div className="post-list-item"></div>

    return (
        <div className="post-list-item">
            <PostHeader post={post} user={user} />
            <p>{post.content}</p>
            <CommentList comments={comments}/>
            <PostAddCommentForm 
            setComments={setComments} 
            comments={comments} 
            postId={post.id}
            />
        </div>
    )
}