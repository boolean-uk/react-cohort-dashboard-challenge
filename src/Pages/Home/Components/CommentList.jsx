import React, { useEffect, useState } from 'react'
import CreateComment from './CreateComment'
import CommentItem from './CommentItem'

function CommentList({postId}) {
    const URL = `https://boolean-api-server.fly.dev/thegrevling/post/${postId}/comment`
    const [comments, setComments] = useState([])

    
    const fetchComments = async () => {
        try {
          const response = await fetch(URL);
          if (response.ok) {
            const data = await response.json();
            setComments(data);
          } else {
            console.error('Failed to fetch posts');
          }
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      };

      useEffect(() => {
        fetchComments();
    }, [])

    return (
        <div>
            {comments && comments.map((comment, index) => <CommentItem comment={comment} key={index} />)}
            <CreateComment fetchComments={fetchComments} postId={postId}/>
        </div>
    )
}

export default CommentList