import Comment from "./Comment";
import { useContext } from "react";
import DataContext from "../../DataContext";
import { findById } from "../../Utils";

function CommentsLists(props) {
    const { comments,post,updateComment } = props;
    const { users } = useContext(DataContext);
    return (
        <ul>
            {comments.map((comment) => {
                const user = findById(users, comment.userId);
                return <Comment comment={comment} user={user} post={post} updateComment={updateComment} />;
            })}
        </ul>
    );
}

export default CommentsLists;
