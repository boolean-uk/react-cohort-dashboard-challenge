import { useState, useEffect } from 'react'
import PropTypes from "prop-types"
import Comment from './Comment';
import fetchData from '../../service/FetchData';



function CommentSection({comments, setComments, postId = -1}) {

    useEffect(() => {
        fetchData(`https://boolean-api-server.fly.dev/KonWritesCode/post/${postId}/comment`, setComments)
        }, [] )

        useEffect(() => {
            fetchData(`https://boolean-api-server.fly.dev/KonWritesCode/post/${postId}/comment`, setComments)
            }, [] )

    if(comments.length === 0)
      return (<div/>);

    return (
      <div className='comment-section'>
        See previous comments
        {comments.map((comment, index) => (
          <Comment 
            key={index}
            data={comment}
          />))
        }
      </div>
  )
}

CommentSection.propTypes = { 
	postId: PropTypes.number, 
    comments: PropTypes.array,
    setComments: PropTypes.func,
}


export default CommentSection