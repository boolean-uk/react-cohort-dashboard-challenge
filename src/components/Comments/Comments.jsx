import { useState, useEffect } from "react"
import AddComment from "./AddComment"
import Comment from "./Comment"
import { useParams } from "react-router-dom"
import { baseURL } from "../../App"


export default function Comments ({postId, setReload}) {
  
  const {id} = useParams()
  
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
  if (comments.length === 0) return (
    <>
      <p>No commments yet</p>
      <AddComment />
    </>
  )
  
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
    <AddComment postId={postId} setReload={setReload}/>
    {comments.slice(-visibleComments).map((comment, index) => <Comment key={index} comment={comment}/>)}
    </>
    )
}