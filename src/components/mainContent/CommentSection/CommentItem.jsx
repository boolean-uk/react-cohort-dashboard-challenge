import styled from "styled-components";
import PropTypes from "prop-types";
import ProfileCircle from "../../ProfileCircle";
import { Link } from "react-router-dom";

const CommentContainer = styled.div`
  margin-left: 15px;
  display: flex;
  align-items: center;
  width: auto;
  margin-bottom: 10px;
`;

const CommentText = styled.div`
  margin-left: 10px;
  background-color: #e6ebf5;
  padding: 10px 80px 10px 15px;
  font-size: 1rem;
  width: auto;
  border-radius: 4px;
`;

const CommentHeader = styled(Link)`
  color: #000046;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
`;

const CommentItem = ({ comment }) => (
  <CommentContainer>
    <ProfileCircle
      id={comment.contactId}
      firstName={comment.firstName}
      lastName={comment.lastName}
    />
    <CommentText>
      <CommentHeader to={`/profile/${comment.contactId}`}>
        {comment.firstName} {comment.lastName}
      </CommentHeader>
      <p style={{ margin: 1 }}>{comment.text}</p>
    </CommentText>
  </CommentContainer>
);

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default CommentItem;
