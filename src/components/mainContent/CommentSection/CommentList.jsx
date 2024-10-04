import styled from "styled-components";
import PropTypes from "prop-types";
import CommentItem from "./CommentItem";
import ShowMoreButton from "./ShowMoreButton";

const CommentListContainer = styled.div`
  margin: 20px auto;
`;

const CommentList = ({ comments, showAll, setShowAll }) => {
  const commentsToShow = showAll ? comments : comments.slice(-3);

  return (
    <CommentListContainer>
      {comments.length > 3 && (
        <ShowMoreButton showAll={showAll} setShowAll={setShowAll} />
      )}
      {commentsToShow.map((comment, index) => (
        <CommentItem key={index} comment={comment} />
      ))}
    </CommentListContainer>
  );
};

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
  showAll: PropTypes.bool.isRequired,
  setShowAll: PropTypes.func.isRequired,
};

export default CommentList;
