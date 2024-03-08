import { useState, useEffect } from 'react'
import Comment from '../comment/Comment'
import MakePostComment from './MakePostComment'

function PostComments(props) {
  const [comments, setComments] = useState([])
  
  // Fetch post comments here
  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/RobinKaastrup/post/${props.postId}/comment`)
    .then(res => res.json())
    .then(setComments)
  }, [])

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/RobinKaastrup/post/${props.postId}/comment`)
    .then(res => res.json())
    .then(setComments)
  }, [comments])
  
  const content = comments.map(comment => <Comment comment={comment} key={comment.id}/>)

  return (
    <div className="comment">
      {content}
      <MakePostComment comments={comments} setComments={setComments} postId={props.postId}/>
    </div>
  )
}

export default PostComments