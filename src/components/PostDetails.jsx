import { createContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UpdateCommentForm from "./UpdateCommentForm";
//import { useCommentContext } from "../Contexts/CommentContext";

export const CommentContext = createContext();

function PostDetails() {
  const { postId } = useParams();
  const [comments, setComments] = useState([]);
  const [showAllComments, setShowAllComments] = useState(false);

  const navigate = useNavigate();

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

  const toggleComments = () => {
    setShowAllComments((prevShowAllComments) => !prevShowAllComments);
  };
  const displayedComments = showAllComments ? comments : comments.slice(0, 3);

  const handleDeleteComment = (commentId) => {
    fetch(
      `https://boolean-api-server.fly.dev/pialoana/post/${postId}/comment/${commentId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => {
      if (response.ok) {
        setComments((prevComments) =>
          prevComments.filter((c) => c.id !== parseInt(commentId))
        );
      } else {
        throw new Error("Failed to delete comment");
      }
    });

    navigate(`/post/${postId}`);
  };

  const handleUpdateComment = async (commentId, updatedContent) => {
    const commentUpd = comments.find((comment) => comment.id === commentId);

    try {
      const response = await fetch(
        `https://boolean-api-server.fly.dev/pialoana/post/${postId}/comment/${commentId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            postId: parseInt(postId),
            content: updatedContent,
            contactId: commentUpd.contactId,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update comment");
      }
      const updatedComment = await response.json();
      setComments((prevComments) =>
        prevComments.map((c) => (c.id === commentId ? updatedComment : c))
      );
    } catch (error) {
      console.error("Error updating comment:", error);
    }
  };

  return (
    <CommentContext.Provider value={{ handleUpdateComment }}>
      <div>
        <header>Comments for Post {postId}</header>
        <ul>
          {displayedComments.map((comment) => (
            <li key={comment.id}>
              <p>{comment.content}</p>

              <div className="comment-buttons">
                <button onClick={() => handleDeleteComment(comment.id)}>
                  Delete
                </button>
                <UpdateCommentForm comment={comment} />
              </div>
            </li>
          ))}
        </ul>
        {showAllComments ? (
          <button onClick={toggleComments}>Show fewer comments</button>
        ) : (
          <button onClick={toggleComments}>Show previous comments</button>
        )}
      </div>
    </CommentContext.Provider>
  );
}

export default PostDetails;
