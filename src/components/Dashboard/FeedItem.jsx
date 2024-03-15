/* eslint-disable react/prop-types */

import { useState } from 'react'

export default function FeedItem({ post, users }) {
  const { title, content, comments } = post
  const user = users.find(user => user.id === post.contactId + 1)
  const [showAllComments, setShowAllComments] = useState(false)
 

  if (!user) {
    return null
  }

  const { firstName, lastName, favouriteColour } = user


  let commentsToRender
  if (comments && comments.length > 0) {
    commentsToRender = comments.slice(-3).reverse()
    if (showAllComments) {
      commentsToRender = comments.reverse()
    }
  }

  return (
    <>
      <div className="FeedItem">
        <div className="profile-icon" style={{ background: favouriteColour }}>
          {firstName[0]} {lastName[0]}
        </div>
        <div>
          <div className="firstname-lastname">
            <span className="firstname">{firstName}</span>
            <span className="lastname">{lastName}</span>
          </div>
          <div className="profile-description">{title}</div>
        </div>
      </div>
      <div className="message-item">{content}</div>

      <br></br><br></br>
      {!showAllComments && (
      <a href="#" onClick={() => setShowAllComments(true)} className="seeprev">See previous comments</a>
      )}

    
      {commentsToRender && (
        <div className="comments-container">
          <ul className="comments-list">
            {commentsToRender.map((comment, index) => {
              const user = users.find(user => user.id === comment.contactId)
              if (!user) return null
              const { firstName, lastName, favouriteColour } = user
              return (
                <li key={index} className="FeedItem">
                  <div className="profile-icon" style={{ background: favouriteColour }}>
                    {firstName[0]} {lastName[0]}
                  </div>
                  <div className="comment-container">
                    <div className="firstname-lastname">
                      <span className="firstname">{firstName}</span>
                      <span className="lastname">{lastName}</span>
                    </div>
                    <div>{comment.content}</div>
                  </div>
                </li>
              )
            })}
          </ul>

        </div>
      )}
    </>
  )
}