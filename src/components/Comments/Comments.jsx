import { useState, useEffect } from "react"
import Comment from "./Comment"

export default function Comments ({postId}) {
  
  const [comments, setComments] = useState([])

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
    comments.map((comment, index) => <Comment key={index} comment={comment}/>)
  )
}