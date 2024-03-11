import React, { useState } from 'react'

function CommentListItem({comment, index}) {
    console.log(comment)
    
  return (
    <>
    <li key={index}>
        <p>{comment.content}</p>
    </li>
    </>
  )
}

export default CommentListItem