import React from 'react'
import { useEffect, useState } from 'react'
import "./PostComment.css"

function PostComment({comment}) {

    const [commentUser, setCommentUser] = useState()

useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/Eddy1108/contact/${comment.contactId}`)
    .then(response => response.json())
    .then(setCommentUser)
  }, [])

  let initials = {first: "", second: ""}
  if(commentUser){
      initials = {first: commentUser.firstName.charAt(0).toUpperCase(), second: commentUser.lastName.charAt(0).toUpperCase()}
  }

  return (
    <div className="comment-container">
    <div className='comment-header'>
        <div className="comment-profile-picture-post">
            {initials.first && initials.second ? (
            <div className="initials">{`${initials.first}${initials.second}`}</div>
            ) : (
            <div className="initials">NN</div>
            )}
        </div>
        <div className='comment-post-header'> {commentUser ? <p>{commentUser.firstName} {commentUser.lastName}</p> : "Anon"}</div>
    </div>
    <div className='comment-post-content'>
        <p>{comment.content}</p>
    </div>  
    
    </div>
  )
}

export default PostComment