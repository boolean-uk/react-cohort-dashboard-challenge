import React, { useState } from 'react'
import AuthorInitials from './AuthorInitials'
import { usePosts } from '../contexts/PostContext'

function CommentForm({ postId, onCommentSubmit }) {
  const [body, setBody] = useState('')
  const { loggedInUser } = usePosts()

  const getInitials = (name) => {
    const splitName = name.split(' ')
    if (splitName.length === 1) return splitName[0][0]
    return splitName[0][0] + splitName[splitName.length - 1][0];
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    const newComment = {
      postId,
      userId: loggedInUser.id,
      userInitials: getInitials(loggedInUser.name),
      body
    }

    onCommentSubmit(newComment)
    setBody('')
  }

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <AuthorInitials 
        name={loggedInUser ? loggedInUser.name : ''} 
        id={loggedInUser ? loggedInUser.id : ''} 
      />
      <input 
        type="text" 
        value={body} 
        onChange={e => setBody(e.target.value)} 
        placeholder="Add a comment..." 
        className="comment-input"
      />
      <button type="submit" className="submit-btn">
        <img src="../paper-plane-top.png" alt='paper-plane-icon' style={{ width: '20px', height: '20px' }} />
      </button>
    </form>
  )
}

export default CommentForm;