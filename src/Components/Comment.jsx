import { useEffect, useState, useContext } from "react";
import { getInitials } from "../Utils/helpers";
import { AppContext } from "../App";
import { PostContext } from "./Post";
import EditIcon from "../assets/edit.svg";
import DeleteIcon from "../assets/delete.svg";
import { useNavigate } from "react-router-dom";
function Comment({ postId, comment, fetchUser }) {
  const [user, setUser] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(comment.content);
  const { loggedInUser, deleteComment } = useContext(AppContext);
  const { postComments, setPostComments } = useContext(PostContext);
  const navigate = useNavigate()
  useEffect(() => {
    fetchUsername();
  }, []);

  const fetchUsername = async () => {
    const user = await fetchUser(comment.contactId);
    setUser(user);
  };

  const handleDelete = () => {
    deleteComment(postId, comment.id);
    setPostComments(prevComments =>
      prevComments.filter(prevComment => prevComment.id !== comment.id)
    );
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedContent(comment.content);
  };

  const handleSaveEdit = async () => {
    const updatedComment = { postId: postId, content: editedContent, contactId: comment.contactId };
    const response = await fetch(`https://boolean-api-server.fly.dev/Eliassoprani/post/${postId}/comment/${comment.id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedComment)
    });

    if (response.ok) {
      // Update visually
      const updatedComments = postComments.map(prevComment =>
        prevComment.id === comment.id ? { ...prevComment, content: editedContent } : prevComment
      );
      setPostComments(updatedComments);
      setIsEditing(false);
    } else {
      console.error('Failed to update comment');
    }
  };

  const handleChange = (event) => {
    setEditedContent(event.target.value);
  };

  return (
    <div className="comment">
      <div
        className="profile-picture-comment"
        style={user && { backgroundColor: user.favouriteColour }}
        onClick={() => {
          navigate(`/profile/${user.id}`);
        }}
      >
        <p>{user && getInitials(user.name)}</p>
      </div>

      <div className="comment-content">
        <p style={{ margin: "0px", fontWeight: "bold" }}>{user && user.name}</p>
        {isEditing ? (
          <textarea
            value={editedContent}
            onChange={handleChange}
          />
        ) : (
          <p style={{ margin: "0px" }}>{comment.content}</p>
        )}
      </div>
      {loggedInUser && user
        ? loggedInUser.id === user.id && (
            <>
              {isEditing ? (
                <>
                  <button onClick={handleSaveEdit}>
                    Save
                  </button>
                  <button onClick={handleCancelEdit}>
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button onClick={handleDelete}>
                    <img style={{ width: "20px" }} src={DeleteIcon} alt="" />
                  </button>
                  <button onClick={handleEdit}>
                    <img style={{ width: "20px" }} src={EditIcon} alt="" />
                  </button>
                </>
              )}
            </>
          )
        : null}
    </div>
  );
}

export default Comment;
