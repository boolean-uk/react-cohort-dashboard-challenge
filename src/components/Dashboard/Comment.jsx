/* eslint-disable react/prop-types */
import send from '../../assets/send-icon.svg'
import { useState } from 'react'

export default function Comment({ currentUser, post, updateFeed }) {
  const { firstName = '', lastName = '', favouriteColour } = currentUser
  const { id } = post
  const [comment, setComment] = useState('')
  const firstInitial = firstName && firstName[0]
  const lastInitial = lastName && lastName[0]

  const handleSend = () => {
    const commentData = {
      postId: id,
      contactId: 0, 
      content: comment
    }

    const jsonString = `{"id":${post.id},"postId":${id},"contactId":0,"content":"${comment}"}`

    fetch(`https://boolean-api-server.fly.dev/hkyksk/post/${id}/comment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: jsonString
    })
    .then(response => {
      console.log('Comment posted successfully')
      setComment('')
      updateFeed() 
    })
    .catch(error => {
      console.error('Error posting comment:', error)
    })
  }

  return (
    <div className="post">
      <div className="profile-icon" style={{ background: favouriteColour }}>
        {firstInitial} {lastInitial}
      </div>

      <div className="input-wrapper">
        <input
          type="text"
          className="text-field-comment"
          placeholder="Add a comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button className="send-icon" onClick={handleSend}>
          <img src={send} alt="send button" />
        </button>
      </div>
    </div>
  )
}
