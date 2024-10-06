import React from "react";
import { Link, useParams } from "react-router-dom";
import Avatar from "../user/Avatar";
import Comment from "./Comment";
import { useUser } from "../../contexts/UserContext";
import { usePosts } from "../../contexts/PostContext";

const SinglePost = () => {
    const { id } = useParams<{ id: string }>();
    const { postUsers } = useUser();
    const { posts } = usePosts();

    const post = posts.find(p => p.id === Number(id));
    const postUser = postUsers.find(user => user.id === post?.contactId);

    if (!post) return <div>The post was not found.</div>;

    return (
        <div className="post-container">
            <div className="post-header">
                <Avatar username={`${postUser?.firstName} ${postUser?.lastName}`} backgroundColor={postUser?.favouriteColour} />
                <div className="post-author-info">
                    <h3>{postUser ? `${postUser.firstName} ${postUser.lastName}` : 'Uknown user'}</h3>
                    <p className="post-subtitle">{post.title}</p>
                </div>
            </div>
            <div className="post-content">
                <p>{post.content}</p>
            </div>
            <span className="separator"/>
            <Comment postId={post.id} />
        </div>
    );
}

export default SinglePost;
