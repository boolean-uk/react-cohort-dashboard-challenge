import { useEffect, useState } from "react";

// components
import UserCycle from "../../../components/UserCycle";
import CommentsBlock from "./CommentsBlock";

// api
import { getContact } from "../../../utilities/api";

const PostItem = ({ user, post }) => {
    const [postUser, setPostUser] = useState({});

    useEffect(() => {
        getContact(post.contactId).then((data) => setPostUser(data));
    }, [post]);

    return (
        <div className="postItem">
            {Object.keys(postUser).length && (
                <div className="postItem__user">
                    <UserCycle
                        name={{
                            firstName: postUser.firstName,
                            lastName: postUser.lastName,
                        }}
                    />
                    <div className="postItem__userName">
                        <span className="postItem__userName-title">
                            {postUser.firstName} {postUser.lastName}
                        </span>
                        <span className="postItem__userName-subtitle">
                            {post.title}
                        </span>
                    </div>
                </div>
            )}

            <div className="postItem__body">
                <p className="postItem__body-text">{post.content}</p>
            </div>

            <CommentsBlock user={user} postId={post.id} />
        </div>
    );
};

export default PostItem;
