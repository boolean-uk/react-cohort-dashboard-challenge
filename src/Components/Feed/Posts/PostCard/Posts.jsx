import { useContext, useEffect, useState } from "react";
import PostCard from "./PostCard";
import { PostsContext } from "../../../../App";

function Posts() {
    const{posts} = useContext(PostsContext)

    return (
        <ul className="posts-container">
            {posts.toReversed().map((post) =>
            <PostCard key={post.id} post={post} />
        )}
        </ul>
    )
}
export default Posts