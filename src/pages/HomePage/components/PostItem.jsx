import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// components
import UserCycle from "../../../components/UserCycle";
import CommentsBlock from "./CommentsBlock";

// api
import { changePostData, deletePost, getContact } from "../../../utilities/api";
import InputElement from "../../../components/InputElement";

const PostItem = ({ user, post, getPosts }) => {
    const [postUser, setPostUser] = useState({});
    const [isEdit, setIsEdit] = useState(false);
    const [postTitle, setPostTitle] = useState(post.title);
    const [postContent, setPostContent] = useState(post.content);

    useEffect(() => {
        getContact(post.contactId).then((data) => setPostUser(data));
    }, [post]);

    // functions

    const submitDelete = () => {
        deletePost(post.id).then(() => getPosts());
    };

    const submitChanges = () => {
        changePostData(post.id, {
            title: postTitle,
            content: postContent,
            contactId: postUser.id,
        }).then(() => getPosts());

        setIsEdit(false);
    };

    return (
        <div className="postItem">
            {Object.keys(postUser).length > 0 && (
                <div className="postItem__user">
                    <div className="postItem__buttons">
                        {!isEdit ? (
                            <>
                                <div
                                    className="postItem__user-button"
                                    onClick={() => setIsEdit(true)}
                                >
                                    EDIT
                                </div>
                                <div
                                    className="postItem__user-button"
                                    onClick={submitDelete}
                                >
                                    DEL
                                </div>
                            </>
                        ) : (
                            <button
                                className="postItem__user-button"
                                onClick={submitChanges}
                            >
                                SAVE
                            </button>
                        )}
                    </div>

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
                        {!isEdit ? (
                            <Link
                                to={`/post/${post.id}`}
                                className="postItem__userName-subtitle"
                            >
                                {post.title}
                            </Link>
                        ) : (
                            <InputElement
                                placeholder="What's your title?"
                                value={postTitle}
                                setValue={setPostTitle}
                            />
                        )}
                    </div>
                </div>
            )}

            <div className="postItem__body">
                {!isEdit ? (
                    <p className="postItem__body-text">{post.content}</p>
                ) : (
                    <InputElement
                        placeholder="What's on your mind?"
                        value={postContent}
                        setValue={setPostContent}
                    />
                )}
            </div>

            <CommentsBlock user={user} postId={post.id} />
        </div>
    );
};

export default PostItem;
