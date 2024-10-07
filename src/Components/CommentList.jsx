import { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";
import "./Styling/CommentList.css";
import NewCommentForm from "./NewCommentForm";

function getInitials(firstName, lastName) {
    return `${firstName[0]}${lastName[0]}`.toUpperCase();
  }

function CommentList({ postId }) {
  const [comments, setComments] = useState([]);
  const { friendList } = useContext(AppContext);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`https://boolean-uk-api-server.fly.dev/josteinruen/post/${postId}/comment`);
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [postId]);

  const getCommenter = (contactId) => {
    return friendList.find(friend => friend.id === contactId);
  };

  return (
    <div className="comment-list">
      {comments.length > 0 ? (
        comments.map(comment => {
          const commenter = getCommenter(comment.contactId);
          const initials = commenter ? getInitials(commenter.firstName, commenter.lastName) : "NA";
          return (
            <div key={comment.id} className="comment">
              <div className="comment-author-initials">
                {initials}
              </div>
              <p><strong>{commenter ? `${commenter.firstName} ${commenter.lastName}` : "Unknown"}</strong>: {comment.content}</p>
            </div>
          );
        })
      ) : (
        <p>No comments available.</p>
      )}
      <NewCommentForm postId={postId} />
    </div>
  )
}

export default CommentList;