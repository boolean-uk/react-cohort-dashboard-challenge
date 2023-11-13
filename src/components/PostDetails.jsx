import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import Submit from "../assets/Submit.svg";

function PostDetails({ contacts, handleSubmit, mainUserInitials, commentInputs, postComments }) {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

    // Fetch the post data using postId
  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/Callumhayden99/post/${postId}`)
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(error => console.error("Error fetching post:", error));

    // Fetch the comments for the post
    fetch(`https://boolean-api-server.fly.dev/Callumhayden99/post/${postId}/comment`)
      .then(response => response.json())
      .then(data => setComments(data))
      .catch(error => console.error("Error fetching comments:", error));
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  // Assuming contact is found from contacts
  const contact = contacts.find(c => c.id === post.contactId);
  const initials = contact ? `${contact.firstName[0]}${contact.lastName[0]}` : "";

  const handleCommentChange = (postId, value) => {
    // Logic for handling comment change
  }

  return (

  <div className="individual-background">
    <div className="Individual-post">
    <div className="post-details">
      <div className="comment-title">
        <div className="post-initials">{initials}</div>
        {contact ? `${contact.firstName} ${contact.lastName}` : ""}
      </div>

      <div className="comment-link">{post.title}</div>
      <p>{post.content}</p>
      <hr />

      {postComments[post.id]?.map((comment) => {
          const commenter = contacts.find((c) => c.id === comment.contactId);
          const initials = commenter
            ? `${commenter.firstName[0]} ${commenter.lastName[0]}`
            : "";
          return (
            <div key={`${post.id} ${comment.id}`} className="other-comment">
              <div className="post-initials">{initials}</div>
              <div className="other-comments-post">
                <div className="comment-post-name">
                  {commenter
                    ? `${commenter.firstName} ${commenter.lastName}`
                    : ""}
                </div>
                <div className="comment-content-post">{comment.content}</div>
              </div>
            </div>
          );
        })}

      <div className="form">
        <form onSubmit={(e) => handleSubmit(e, post.id)} className="comment-form">
          <label>
            <div className="user-comment-logo">{mainUserInitials}</div>
            <input
              className="input"
              type="text"
              placeholder="Add a comment..."
              value={commentInputs[post.id] || ""}
              onChange={(e) => handleCommentChange(post.id, e.target.value)}
            />
          </label>
          <button className="post-button-post-details" type="submit">
            <img src={Submit} width={20} alt="submit button" />
          </button>
        </form>
      </div>

      <button className="navigate-home" onClick={() => navigate(-1)}>Go Back</button>
      <Link to="/">
        <button className="back-to-home-button">Back to Home</button>
      </Link>
    </div>
    </div>
    </div>
  );
}

export default PostDetails;