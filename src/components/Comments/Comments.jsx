import { useState, useEffect } from "react"
import Comment from "./Comment"
import { useParams } from "react-router-dom"
import { baseURL } from "../../App"

export default function Comments ({postId}) {
  
  const {id} = useParams()
  console.log(!id)
  
  const [comments, setComments] = useState([])
  const [visibleComments, setVisibleComments] = useState(null)

  const getComments = () => {
    
    const endpoint = `/post/${postId}/comment`

    fetch(baseURL + endpoint)
      .then(res => res.json())
      .then(data => {
        setComments(data)
        !id ? setVisibleComments(3) : setVisibleComments(data.length)
      })
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