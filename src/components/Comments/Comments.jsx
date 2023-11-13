import { useState, useEffect } from "react"
import Comment from "./Comment"

export default function Comments ({postId}) {
  
  const [comments, setComments] = useState([])
  const [visibleComments, setVisibleComments] = useState(3)

  const getComments = () => {
    const baseURL = "https://boolean-api-server.fly.dev/"
    const directory = "AllyDouillette" + "/post"
    const endpoint = `/${postId}/comment`

    fetch(baseURL + directory + endpoint)
      .then(res => res.json())
      .then(data => setComments(data))
  }

  useEffect(getComments, [])

  return (
    <>
    {comments.length > visibleComments ? (
      <p className="expandComments" onClick={() => setVisibleComments(comments.length)}>
        See previous comments
      </p>
    ) : (
      <p className="expandComments" onClick={() => setVisibleComments(3)}>
        Hide older comments
      </p>
    )}
    {comments.slice(-visibleComments).map((comment, index) => <Comment key={index} comment={comment}/>)}
    </>
    )
}