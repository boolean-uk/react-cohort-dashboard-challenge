/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import CreateNewPostComment from "./CreateNewPostComment"
import PostComment from "./PostComment"

export default function PostCommentsList(props) {
    const {post} = props
    const [postComments, setPostComments] = useState([])

    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/mkmbaran/post/${post.id}/comment`)
        .then(res => res.json())
        .then(data => setPostComments(data))
        .catch(error => console.error('Error fetching comments: ', error))
      }, [postComments])

    if (!postComments) return <p>Loading comments...</p>

    return(
        <div>
            <h4>All comments</h4>
            <div>
                <ul className="comments">
                    {postComments.map((comment, index) => (
                        <PostComment key={index} comment={comment}/>
                    ))}
                    <CreateNewPostComment post={post}/>
                </ul>
                
            </div>
        </div>
    )
}