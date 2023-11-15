import { useEffect, useState } from "react";

// components
import UserCycle from "../../../components/UserCycle";

// api
import {
    changeCommentData,
    deleteComment,
    getContact,
} from "../../../utilities/api";
import InputElement from "../../../components/InputElement";

const CommentItem = ({ comment, getAllComments }) => {
    const [commentUser, setCommentUser] = useState({});
    const [isEdit, setIsEdit] = useState(false);
    const [commentContent, setCommentContent] = useState("");

    useEffect(() => {
        getContact(comment.contactId).then((data) => setCommentUser(data));
        setCommentContent(comment.content);
        setIsEdit(false);
    }, [comment]);

    // functions

    const submitDeleteComment = () => {
        deleteComment(comment.postId, comment.id).then(() => getAllComments());
    };

    const submitChange = () => {
        changeCommentData(comment.postId, comment.id, {
            postId: comment.postId,
            content: commentContent,
            contactId: commentUser.id,
        }).then(() => getAllComments());
        setIsEdit(false);
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
                        {!isEdit ? (
                            <div
                                className="commentItem__content-edit"
                                onClick={() => setIsEdit(true)}
                            >
                                Edit
                            </div>
                        ) : (
                            <div
                                className="commentItem__content-edit"
                                style={{ right: "-50px" }}
                                onClick={submitChange}
                            >
                                Save
                            </div>
                        )}

                        <h3 className="commentItem__content-name">
                            {commentUser.firstName} {commentUser.lastName}
                        </h3>
                        {!isEdit ? (
                            <p className="commentItem__content-text">
                                {comment.content}
                            </p>
                        ) : (
                            <InputElement
                                placeholder="Add a comment..."
                                value={commentContent}
                                setValue={setCommentContent}
                            />
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default CommentItem;
