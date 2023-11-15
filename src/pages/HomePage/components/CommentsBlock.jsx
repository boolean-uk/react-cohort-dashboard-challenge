// components
import { useEffect, useState } from "react";
import CommentsForm from "./CommentsForm";
import CommentsList from "./commentsList";
import { getComments } from "../../../utilities/api";

const CommentsBlock = ({ user, postId }) => {
    const [comments, setComments] = useState([]);
    const [showAllComments, setShowAllComments] = useState(false);

    const getAllComments = () => {
        getComments(postId).then((data) => setComments(data));
    };

    useEffect(() => {
        getAllComments();
    }, [postId]);

    return (
        <div className="commentsBlock">
            {comments.length > 3 && !showAllComments && (
                <button
                    className="commentsBlock__prevComments"
                    onClick={() => setShowAllComments(true)}
                >
                    See previous comments
                </button>
            )}

            {comments.length > 0 && (
                <CommentsList
                    comments={
                        !showAllComments && comments.length > 3
                            ? comments.slice(
                                  comments.length - 3,
                                  comments.length
                              )
                            : comments
                    }
                    getAllComments={getAllComments}
                />
            )}

            <CommentsForm
                user={user}
                getAllComments={getAllComments}
                postId={postId}
            />
        </div>
    );
};

export default CommentsBlock;
