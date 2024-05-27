import Comment from "./Comment";
import { useEffect } from "react";

export default function Comments ({postId, users, comments, setComments}) {
    
    // console.log(postId)
    // console.log(comments)

    useEffect(() => {
        fetch(`https://boolean-uk-api-server.fly.dev/Alistair1080/post/${postId}/comment`)
          .then(res => res.json())
          .then(data => setComments(data))
      }, [])

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment} users={users} />)}
        </div>
    )
}