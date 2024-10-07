import { useContext, useEffect, useState } from "react";
import "./Styling/PostListItem.css";
import { AppContext } from "../App";
import NewCommentForm from "./NewCommentForm";

function getInitials(firstName, lastName) {
  return `${firstName[0]}${lastName[0]}`.toUpperCase();
}

function PostListItem({ post }) {
  const { friendList, setPosts } = useContext(AppContext);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`https://boolean-uk-api-server.fly.dev/josteinruen/post/${post.id}/comment`);
        const data = await response.json();
        setComments(data.slice(-3));
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [post.id]);

  const handleNewComment = (newComment) => {
    setComments((prevComments) => [...prevComments.slice(-2), newComment]);
    setPosts((prevPosts) =>
      prevPosts.map((p) =>
        p.id === post.id ? { ...p, comments: [...p.comments, newComment] } : p
      )
    );
  };

  if (!friendList) {
    return null;
  }

  const postAuthor = friendList.find(friend => friend.id === post.contactId);
  const initials = postAuthor ? getInitials(postAuthor.firstName, postAuthor.lastName) : "NA";
  const authorName = postAuthor ? `${postAuthor.firstName} ${postAuthor.lastName}` : "Unknown";

  return (
    <div className="post-list-item">
      <div className="post-author">
        <div className="post-author-initials" style={{ backgroundColor: postAuthor?.favouriteColour || "#64648c" }}>
          {initials}
        </div>
        <span className="post-author-name">{authorName}</span>
      </div>
      <div className="post-content">
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
      <div className="comment-list">
        {comments.length > 0 ? (
          comments.map(comment => {
            const commenter = friendList.find(friend => friend.id === comment.contactId);
            const initials = commenter ? getInitials(commenter.firstName, commenter.lastName) : "NA";
            return (
              <div key={comment.id} className="comment">
                <div className="comment-author-initials">
                  {initials}
                </div>
                <div className="comment-body">
                <p><strong>{commenter ? `${commenter.firstName} ${commenter.lastName}` : "Unknown"}</strong>: {comment.content}</p>
                </div>
              </div>
            );
          })
        ) : (
          <p>No comments available.</p>
        )}
      </div>
      <NewCommentForm postId={post.id} onNewComment={handleNewComment} />
    </div>
  );
}

export default PostListItem;