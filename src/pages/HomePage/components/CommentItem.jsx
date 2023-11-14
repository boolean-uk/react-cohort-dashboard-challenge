import { useEffect, useState } from "react";

// components
import UserCycle from "../../../components/UserCycle";

// api
import { getContact } from "../../../utilities/api";

const CommentItem = ({ comment }) => {
    const [commentUser, setCommentUser] = useState({});

    useEffect(() => {
        getContact(comment.contactId).then((data) => setCommentUser(data));
    }, []);

    return (
        <div className="commentItem">
            {Object.keys(commentUser).length && (
                <>
                    <UserCycle
                        name={{
                            firstName: commentUser.firstName,
                            lastName: commentUser.lastName,
                        }}
                    />

                    <div className="commentItem__content">
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
