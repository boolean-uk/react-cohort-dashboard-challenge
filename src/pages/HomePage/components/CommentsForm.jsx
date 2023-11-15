import { useState } from "react";

// components
import InputElement from "../../../components/InputElement";
import UserCycle from "../../../components/UserCycle";

// images
import plane from "../../../assets/img/paper-plane.svg";

// api
import { createNewComment } from "../../../utilities/api";

const CommentsForm = ({ user, getAllComments, postId }) => {
    const [comment, setComment] = useState("");

    const submitComment = (e) => {
        e.preventDefault();

        if (comment.length > 0) {
            createNewComment(postId, {
                postId: postId,
                content: comment,
                contactId: user.id,
            }).then(() => getAllComments());

            setComment("");
        }
    };

    return (
        <form onSubmit={submitComment} className="commentsBlock__form">
            {Object.keys(user).length > 0 && (
                <UserCycle
                    name={{
                        firstName: user.firstName,
                        lastName: user.lastName,
                    }}
                    userId={user.id}
                />
            )}

            <div className="commentsBlock__input">
                <InputElement
                    placeholder="Add a comment..."
                    value={comment}
                    setValue={setComment}
                />
                <button className="commentsBlock_button">
                    <img src={plane} />
                </button>
            </div>
        </form>
    );
};

export default CommentsForm;
