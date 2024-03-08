import { useContext, useState } from 'react';
import { UserContext } from '../App'; 
import { CommentContext } from './PostListItem'; 

export default function PostListItemForm() {
  const { activeUser } = useContext(UserContext);
  const { comments, post, setComments } = useContext(CommentContext);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the comment is not empty
    if (!newComment.trim()) return;

    let newCommentObject = {
      postId: post.id,
      contactId: activeUser.id,
      content: newComment,
    };

    // Make a POST request to add a new comment
    fetch(`https://boolean-api-server.fly.dev/SanderSaether/post/${post.id}/comment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCommentObject),
    })
    .then((res) => res.json())
    .then((data) => {
      // Create a new comment object with an id returned by the API
      newCommentObject = { ...newCommentObject, id: data.id };
      // Clear the input field after submission
      setNewComment('');
      // Update the comments state with the new comment
      setComments([...comments, newCommentObject]);
    });
  };

  return (
    <div className="create-comment">
      <form className="create-comment-form" onSubmit={handleSubmit}>
        <div
          className="create-post-profile"
          style={{ backgroundColor: activeUser.favouriteColour }}>
          <h2>
            {activeUser.firstName.charAt(0)}
            {activeUser.lastName.charAt(0)}
          </h2>
        </div>
        <input
          type="text"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <div className="create-comment-button-container">
          <button type="submit">
            {/* Your submit SVG here */}
          </button>
        </div>
      </form>
    </div>
  );
}
