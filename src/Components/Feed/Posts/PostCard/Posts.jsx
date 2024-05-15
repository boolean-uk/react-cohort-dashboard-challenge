import { useContext, useEffect, useState } from "react";
import PostCard from "./PostCard";
import { PostsContext } from "../../../../App";

function Posts() {
    const{posts} = useContext(PostsContext)

    return (
        <section className="posts-container">
            {posts.map((post) =>
            <PostCard key={post.id} post={post} />
        )}
        </section>
    )
}
export default Posts