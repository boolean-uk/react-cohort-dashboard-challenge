import { useState, useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FaPaperPlane } from "react-icons/fa";
import ProfileCircle from "../../ProfileCircle";
import { CohortAppContext } from "../../../context";

const CommentFormContainer = styled.form`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-left: 15px;
  position: relative;
`;

const TextArea = styled.textarea`
  flex: 1;
  padding: 10px;
  margin-left: 10px;
  background-color: #e6ebf5;
  color: #6d6d93;
  border: none;
  border-radius: 4px;
  resize: none;
  width: 100%;
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 60%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #3498db;
`;

const CommentForm = ({ onAddComment }) => {
  const [newComment, setNewComment] = useState("");
  const { userProfile } = useContext(CohortAppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        text: newComment,
        contactId: userProfile.id,
        firstName: userProfile.firstName,
        lastName: userProfile.lastName,
      };
      onAddComment(comment);
      setNewComment("");
    }
  };

  return (
    <CommentFormContainer onSubmit={handleSubmit}>
      <ProfileCircle
        firstName={userProfile.firstName}
        lastName={userProfile.lastName}
      />
      <TextArea
        rows="1"
        placeholder="Add a comment..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <IconWrapper onClick={handleSubmit}>
        <FaPaperPlane style={{ marginRight: "15px" }} size={20} />
      </IconWrapper>
    </CommentFormContainer>
  );
};

CommentForm.propTypes = {
  onAddComment: PropTypes.func.isRequired,
};

export default CommentForm;
