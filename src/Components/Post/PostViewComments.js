import { useContext } from "react";
import DataContext from "../../DataContext";
import CommentsLists from "../Comment/CommentsList";

function PostViewComments(props) {
    const { comments, updateComment } = useContext(DataContext);
    const { post } = props;
    return (
        <>
            {comments[post.id] ? (
                <CommentsLists
                    comments={comments[post.id] || []}
                    post={post}
                    update={updateComment}
                />
            ) : (
                <p>No comments yet...</p>
            )}
        </>
    );
}

export default PostViewComments;
