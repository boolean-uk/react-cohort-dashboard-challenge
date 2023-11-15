import { useEffect, useState } from "react";

// components
import UserCycle from "../../../components/UserCycle";

// api
import { deleteComment, getContact } from "../../../utilities/api";

const CommentItem = ({ comment, getAllComments }) => {
    const [commentUser, setCommentUser] = useState({});

    useEffect(() => {
        getContact(comment.contactId).then((data) => setCommentUser(data));
    }, [comment]);

    const submitDeleteComment = () => {
        deleteComment(comment.postId, comment.id).then(() => getAllComments());
    };

    return (
        <div className="commentItem">
            {Object.keys(commentUser).length > 0 && (
                <>
                    <UserCycle
                        name={{
                            firstName: commentUser.firstName,
                            lastName: commentUser.lastName,
                        }}
                    />

                    <div className="commentItem__content">
                        <div
                            className="commentItem__content-delete"
                            onClick={submitDeleteComment}
                        >
                            ✖
                        </div>

                        <h3 className="commentItem__content-name">
                            {commentUser.firstName} {commentUser.lastName}
                        </h3>
                        <p className="commentItem__content-text">
                            {comment.content}
                        </p>
                    </div>
                </>
            )}
        </div>
    );
};

export default CommentItem;
