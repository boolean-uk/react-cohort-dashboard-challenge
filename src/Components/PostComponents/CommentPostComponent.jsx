import { useState, useEffect, useContext } from "react";
import { ContactContext } from "../../App";

export default function CommentPostComponent({ postId }) {
  const { contacts } = useContext(ContactContext);
  const [comments, setComments] = useState([]);
  const [newCommentContent, setNewCommentContent] = useState("");
  const [showAllComments, setShowAllComments] = useState(false);

  const fetchComments = async () => {
    try {
      const response = await fetch(
        `https://boolean-uk-api-server.fly.dev/victorscodeingcorner/post/${postId}/comment`
      );
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  });

  const getAuthorDetails = (contactId) => {
    return contacts.find((contact) => contact.id === contactId);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    const newComment = {
      postId,
      contactId: 1, 
      content: newCommentContent,
    };

    try {
      const response = await fetch(
        `https://boolean-uk-api-server.fly.dev/victorscodeingcorner/post/${postId}/comment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newComment),
        }
      );

      if (response.ok) {
        const createdComment = await response.json();
        setComments([...comments, createdComment]);
        setNewCommentContent(""); 
      } else {
        console.error("Failed to post comment.");
      }
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  const displayedComments = showAllComments ? comments : comments.slice(0, 3);

  return (
    <div className="comments-section">
      <h3>Comments</h3>
      {comments.length > 3 && !showAllComments && (
        <button onClick={() => setShowAllComments(true)}>
          See previous comments
        </button>
      )}
      {displayedComments.map((comment) => {
        const author = getAuthorDetails(comment.contactId);
        return (
          <div key={comment.id} className="comment">
            {author && (
              <div
                className="comment-author-initials"
                style={{
                  backgroundColor: author.favouriteColour || "#ccc",
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                  marginRight: "10px",
                }}
              >
                {`${author.firstName[0]}${author.lastName[0]}`}
              </div>
            )}
            <p>{comment.content}</p>
          </div>
        );
      })}

      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          value={newCommentContent}
          onChange={(e) => setNewCommentContent(e.target.value)}
          placeholder="Add a comment"
          required
        />
        <button type="submit">Comment</button>
      </form>
    </div>
  );
}
