import React from 'react'
import { useContext } from 'react'

import CommentListItem from './CommentListItem'

function CommentList({comments}) {
    console.log(comments)
  return (
    <>
        <div className='comment-list'>
            <ul>
            {comments.map((comment, index) => (
                <CommentListItem comment={comment} key={index}/>
            ))}
            </ul>
        </div>
    </>
  )
}

export default CommentList