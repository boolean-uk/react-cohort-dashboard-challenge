import IconUser from '../IconUser'
import { Link } from 'react-router-dom'
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export default function Comment({ comment, users, updateComments }) {
  // eslint-disable-next-line react/prop-types
  const user = users.find(u => u.id === comment.contactId)

  const [isEditing, setIsEditing] = useState(false)
  // eslint-disable-next-line react/prop-types
  const [editedContent, setEditedContent] = useState(comment.content)

  const handleEditToggle = () => {
    setIsEditing(!isEditing)
    // eslint-disable-next-line react/prop-types
    setEditedContent(comment.content)
  }

  const handleEditSave = async (e) => {
    e.preventDefault()
    
    try {
        // eslint-disable-next-line react/prop-types
        const response = await fetch(`https://boolean-uk-api-server.fly.dev/FelixMathiasson/post/${comment.postId}/comment/${comment.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: editedContent,   
                // eslint-disable-next-line react/prop-types
                postId: comment.postId,     
                // eslint-disable-next-line react/prop-types
                contactId: comment.contactId 
            }),
        })

        if (response.ok) {
            updateComments()
            setIsEditing(false)
        } else {
            const errorText = await response.text()
            console.error('ERROR with updating comment', errorText)
        }
    } catch (err) {
        console.error('ERROR:', err)
    }
}

  const handleDelete = async () => {
    try {
      // eslint-disable-next-line react/prop-types
      const response = await fetch(`https://boolean-uk-api-server.fly.dev/FelixMathiasson/post/${comment.postId}/comment/${comment.id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        updateComments() 
      } else {
        console.error('ERROR! Something went wrong with deleteing comment')
      }
    } catch (error) {
      console.error('ERROR! Could not delete comment:', error) 
    }
  }

  return (
    <div className='comment'>
      <IconUser user={user} />

      <div className='commentText'>
        <p className='bold'>
          <Link to={`/profile/${user?.id}`}>{user?.firstName} {user?.lastName}</Link>
        </p>

        {isEditing ? (
          <form onSubmit={handleEditSave}>
            <input
              type='text'
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
            />
            <button type='submit'>Save</button>
            <button type='button' onClick={handleEditToggle}>Cancel</button>
          </form>
        ) : (
          // eslint-disable-next-line react/prop-types
          <p>{comment.content}</p>
        )}
      </div>

      {!isEditing && (
        <div className="commentActions">
          <button onClick={handleEditToggle}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  )
}
