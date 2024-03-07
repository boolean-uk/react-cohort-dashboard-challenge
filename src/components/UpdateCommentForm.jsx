import { useContext, useState } from "react";
import { CommentContext } from "./PostDetails";

function UpdateCommentForm({ comment }) {
  const { handleUpdateComment } = useContext(CommentContext);
  const [updatedContent, setUpdatedContent] = useState(comment.content);
  const [showUpdateField, setShowUpdateField] = useState(false);

  const handleInputChange = (event) => {
    setUpdatedContent(event.target.value);
  };

  const toggleUpdateField = () => {
    setShowUpdateField((prevShowUpdateField) => !prevShowUpdateField);
  };

  const handleUpdate = () => {
    handleUpdateComment(comment.id, updatedContent);
    toggleUpdateField(); // Hide update field after updating
  };

  return (
    <div className="comment-buttons">
      <button onClick={toggleUpdateField}>Update</button>
      {showUpdateField && (
        <div className="update-field-container">
          <textarea
            value={updatedContent}
            onChange={handleInputChange}
            style={{ width: "90%", marginRight: "10px" }}
          />
          <button onClick={handleUpdate}>Save</button>
        </div>
      )}
    </div>
  );
}

export default UpdateCommentForm;
