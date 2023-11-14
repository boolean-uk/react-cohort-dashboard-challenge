// components
import CommentItem from "./CommentItem";

const CommentsList = ({ comments }) => {
    return (
        <div className="commentsList">
            {comments.map((comment, index) => (
                <CommentItem key={index} comment={comment} />
            ))}
        </div>
    );
};

export default CommentsList;
