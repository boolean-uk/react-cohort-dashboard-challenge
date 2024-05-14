import { useEffect, useState } from "react";
import PostCard from "./PostCard";

function Posts({posts, setPosts}) {

    return (
        <section className="posts-container">
            {posts.map((post) =>
            <PostCard key={post.id} post={post} setPosts={setPosts} posts={posts}/>
        )}
        </section>
    )
}
export default Posts