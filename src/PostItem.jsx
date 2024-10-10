/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import './App.css';

function PostItem({ post, authors, onNewComment }) {
  const handleNewComment = (newComment) => {
    onNewComment(post.id, newComment);
  };

  const author = authors.find((a) => a.id === post.contactId);

  return (
    <div className="post-container">
      <div className="post-header">
        <div className="user-initials">{author.firstName.charAt(0)}{author.lastName.charAt(0)}</div>
        <div>
          <Link to={`/post/${post.id}`} className="post-title">
            <p>{post.title}</p>
          </Link>
        </div>
      </div>
      <div className="post-content">{post.content}</div>

      <CommentList comments={post.comments} authors={authors} />

      <CommentForm postId={post.id} onNewComment={handleNewComment} />
    </div>
  );
}

export default PostItem;


