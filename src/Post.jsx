import React from "react";
import { Link } from "react-router-dom";
import CommentList from './CommentList';

function Post({ post }) {
    return (
        <div>
            <h2>
                <Link to={`/post/${post.id}`}>{post.title}</Link>

            </h2>
            <p>{post.content}</p>
            <CommentList comments={post.comments}/>
        </div>
    );
}
export default Post;