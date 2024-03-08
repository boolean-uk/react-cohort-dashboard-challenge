import { useState } from 'react'
import ProfilePicture from '../../ProfilePicture/ProfilePicture'
import PropTypes from "prop-types"

function PostComment({ user, getComments, post }) {
  const [comment, setComment] = useState({})

  async function postComment(event) {
    event.preventDefault()
    event.target.reset()
    
    const postRequest = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({...comment, postId: post.id, contactId: user.id})
    }
    
    await fetch(`https://boolean-api-server.fly.dev/kristianverduin/post/${post.id}/comment`, postRequest)
    getComments()
  }

  function handleChange(event) {
    setComment({...comment, content: event.target.value})
  }

  return (
    <form onSubmit={postComment} className="new-comment">
      <ProfilePicture user={user} />
      <input placeholder=" Add a comment ..." type="content" name="content" onChange={handleChange}/>
      <button type="submit">Post</button>
    </form>
  )
}

PostComment.propTypes = {
    user: PropTypes.object.isRequired,
    getComments: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

export default PostComment
