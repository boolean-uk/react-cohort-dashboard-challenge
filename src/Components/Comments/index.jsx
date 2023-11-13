import { useEffect, useState } from "react"
import Comment from "./Comment"


export default function Comments({getComments, comments}) {
    // const [comments, setComments] = useState([])

    // const getComments = () => {
    //     fetch(`https://boolean-api-server.fly.dev/ilham-saleh/post/${post.id}/comment`)
    //     .then(res => res.json())
    //     .then(data => setComments(data))
    // }

    // useEffect(() => {
    //     getComments()
    // }, [])

    return (
        <div className="comments">
            <p>See previous comments</p>
            {comments.slice(-3).map((comment, index) => (
               <ul key={index}>
                 <Comment comment={comment} key={index} getComments={getComments}/> 
               </ul>
            ))}
        </div>
    )
}