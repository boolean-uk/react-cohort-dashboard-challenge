import CommentListItem from './CommentListItem.jsx'
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../../App.jsx";

function CommentList({ postId, comments, setComments }) {
  const { posts, getCommentsByPostId, getContactById } = useContext(DataContext);

  useEffect(() => {
    getCommentsByPostId(postId, setComments)
  }, [posts]);

  return (
    <ul className='comment-list-container'>
        {comments?.map((comment, index) => (
            <CommentListItem key={index} comment={comment} contact={getContactById(comment.contactId)}/>
        ))}
    </ul>
  );
}

export default CommentList;
