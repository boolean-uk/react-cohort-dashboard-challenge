import React, { useEffect } from "react";
import Avatar from "../user/Avatar";
import Comment from "./Comment";
import { useUser } from "../../contexts/UserContext";
import { usePosts } from "../../contexts/PostContext";
import { Link } from "react-router-dom";

import '../../styling/post.css'

const Post = () => {
    const { fetchPostUsers, postUsers } = useUser();
    const { posts } = usePosts();

    useEffect(() => {
        posts.forEach((post) => {
            if (!postUsers.some((user) => user.id === post.contactId)) {
                fetchPostUsers(post.contactId);
            }
        })
    }, [posts, fetchPostUsers, postUsers]);


    return (
        <>
            {posts.map((post) => {
                const postUser = postUsers.find(user => user.id === post.contactId);
                return (
                    <div key={post.id} className="post-container">
                        <div className="post-header">
                            <Avatar username={`${postUser?.firstName} ${postUser?.lastName}`} backgroundColor={postUser?.favouriteColour} />
                            <div className="post-author-info">
                                <h3>{postUser ? `${postUser.firstName} ${postUser.lastName}` : 'Uknown User'}</h3>
                                <Link to={`/post/${post.id}`} className="post-subtitle">{post.title}</Link>
                            </div>
                        </div>
                        <div className="post-content">
                            <p>{post.content}</p>
                        </div>
                        <span className="separator"/>
                        <Comment postId={post.id} />
                    </div>
                );
            })}
        </>
    )
}

export default Post;