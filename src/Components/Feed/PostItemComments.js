import { useContext } from "react";
import DataContext from "../../DataContext";
import CommentsLists from "../Comment/CommentsList";

function PostItemComments(props) {
    const { comments, updateComment } = useContext(DataContext);

    const { post } = props;

    return (
        <>
            {comments[post.id] ? (
                <CommentsLists
                    comments={
                        post.expanded
                            ? comments[post.id]
                            : (comments[post.id].length > 3
                                  ? comments[post.id].slice(0, 3)
                                  : comments[post.id]) || []
                    }
                    post={post}
                    update={updateComment}
                />
            ) : (
                <p>No comments yet...</p>
            )}
        </>
    );
}

export default PostItemComments;
