import { fetchPostById, fetchComments, deleteComment } from '../api/axios'
import { useParams, Link, useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Comment from '../components/Comment'
import { useUser } from '../UserContext'

function PostView() {

  const { id } = useParams();
  const { defaultUser } = useUser();

  const location = useLocation();
  const { post: addedPost} = location.state || {};

  const [post, setPost] = useState(addedPost); 
  const [comments, setComments] = useState([]);

  const authorInitials = (name) => {
    const nameParts = name.split(' ');
    const initials = nameParts.map((part) => part.charAt(0));
    return initials.join('');
  };

  useEffect(() => {
    if (parseInt(id) >= 100) {
      const addedPost = ({
        id: post.id, 
        userId: defaultUser.id, 
        authorName: defaultUser.name, 
        authorInitials: authorInitials(defaultUser.name),
        title: post.title, 
        body: post.body, 
      }); 
      setPost(addedPost);
      // setComments([]); 
    } else {
      fetchPostById(id)
        .then((data) => {
          setPost(data);
        })
        .catch((error) => {
          console.error('Error fetching post:', error);
        });

      fetchComments(id)
        .then((data) => {
          setComments(data);
        })
        .catch((error) => {
          console.error('Error fetching comments:', error);
        });
    }
  }, [id]);

  const handleDeleteComment = (commentId) => {
    console.log("Comment ID:", commentId); 
    deleteComment(commentId)
      .then(() => {
        const updatedComments = comments.filter((comment) => comment.id !== commentId);
        setComments(updatedComments);
        console.log("Comment deleted successfully.");
      })
      .catch((error) => {
        console.error("Error deleting comment:", error);
      });
  };

  return (
    <>
     <div className="post-view">
      <Link to={`/profile/${post.userId}`}>
        <div className="author-initials">
        <p>{post.authorInitials}</p>
        </div>
      </Link>
      <Link to={`/profile/${post.userId}`}>
        <p>{post.authorName}</p>
      </Link>
      <h3>{post.title}</h3>
      <p>
        {post.body}
      </p>
      <h5>Comments</h5>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} onDeleteComment={handleDeleteComment} />
      ))}
    </div>
  </>
  );
}

export default PostView;

// edit post ?
// add comment ?