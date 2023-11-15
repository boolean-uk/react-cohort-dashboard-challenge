// components
import CommentItem from "./CommentItem";

const CommentsList = ({ comments, getAllComments }) => {
    return (
        <div className="commentsList">
            {comments.map((comment, index) => (
                <CommentItem
                    key={index}
                    comment={comment}
                    getAllComments={getAllComments}
                />
            ))}
        </div>
    );
};

export default CommentsList;
