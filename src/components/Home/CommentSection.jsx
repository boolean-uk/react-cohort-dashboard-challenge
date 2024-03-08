import { useState, useEffect } from 'react'
import PropTypes from "prop-types"
import Comment from './Comment';

function CommentSection({postId = -1}) {
    const [comments, setComments] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`https://boolean-api-server.fly.dev/KonWritesCode/post/${postId}/comment`)
            const data = await response.json()
            setComments(data)
          } catch (error) {
            console.error('Error fetching data:', error)
          }
        }
        fetchData()
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
	postId: PropTypes.array, 
}


export default CommentSection