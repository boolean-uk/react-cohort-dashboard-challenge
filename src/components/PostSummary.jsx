import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function PostSummary({ post, contacts, getInitials }) {
  const { postId } = useParams();
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://boolean-api-server.fly.dev/pialoana/post/${postId}/comment`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch comments");
        }
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [postId]);
  const handleCommentFormSubmit = async (postId, e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await fetch(
        `https://boolean-api-server.fly.dev/pialoana/post/${postId}/comment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            postId: postId,
            content: newComment,
            contactId: 6,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      const data = await response.json();
      setComments((prevComments) => [...prevComments, data]);
      // Clear the form fields
      setNewComment("");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const handleCommentInputChange = (event) => {
    setNewComment(event.target.value);
  };

  return (
    <div key={post.id} className="post">
      <div className="author-info">
        <div className="post-header">
          <div className="author-circle">
            {getInitials(
              contacts[post.contactId]?.firstName,
              contacts[post.contactId]?.lastName
            )}
          </div>
          <div className="comment-author-circle">
            {getInitials(contacts[6]?.firstName, contacts[6]?.lastName)}
          </div>
        </div>
        <div>
          <h3 className="post-author">
            {contacts[post.contactId]?.firstName +
              " " +
              contacts[post.contactId]?.lastName}
          </h3>

          <Link to={`/post/${post.id}`} className="post-title">
            {post.title}
          </Link>
          <p>{post.content}</p>
          <hr />
          <form
            className="post-comment"
            onSubmit={(e) => handleCommentFormSubmit(post.id, e)}
          >
            <label htmlFor="contactId"></label>
            <input
              type="text"
              id="postId"
              placeholder="Add a comment..."
              value={newComment}
              onChange={handleCommentInputChange}
            />
            <button type="submit">comment</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PostSummary;
