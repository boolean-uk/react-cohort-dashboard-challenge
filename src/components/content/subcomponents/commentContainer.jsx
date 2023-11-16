import { useEffect, useState } from "react";
import Comment from "./comment"

import { get } from "../../controller"
const postApi = "https://boolean-api-server.fly.dev/Radio58/post";


export default function commentContainer(postInfo, userInfo) {
    const [comments, setComments] = useState(null)


    useEffect(() => {
      get(`${postApi}/${postInfo.id}/comment`).then((data) => {
        setComments(data)
      })}, [postInfo.id]);
    

    if (!comments) {
        return null
    }
    
    return (
        <>
        <div className="comment-container">
        {
        comments.map((comment) => {
            return (<Comment userInfo={userInfo} commentInfo={comment}/>)
            })
            
        }
        </div> 
        </>
    )
}

