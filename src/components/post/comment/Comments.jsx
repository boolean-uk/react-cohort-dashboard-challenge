import PropTypes from "prop-types";
import "../../../style/post/comment/Comments.css";
import Comment from "./Comment";

const Comments = ({ comments }) => {
    return (
        <ul className="comment-list">
            {comments.map((comment, i) => (
                <Comment key={i} comment={comment} />
            ))}
        </ul>
    );
};

export default Comments;
Comments.propTypes = {
    comments: PropTypes.array.isRequired,
};
