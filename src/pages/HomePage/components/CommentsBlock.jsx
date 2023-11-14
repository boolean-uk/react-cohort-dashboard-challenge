// components
import CommentsForm from "./CommentsForm";
import CommentsList from "./commentsList";

const CommentsBlock = () => {
    return (
        <div className="commentsBlock">
            <CommentsList />

            <CommentsForm />
        </div>
    );
};

export default CommentsBlock;
