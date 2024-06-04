import AddComments from "./PostComponents/AddComment";
import Comments from "./PostComponents/Comments";
import PostContent from "./PostComponents/PostContent";
import { useState } from "react";

export default function Post ({post, users, posts, setPosts}) {
    const [comments, setComments] = useState([])

    return (
        <section>
            <PostContent post={post} users={users}/>
            <hr />
            <Comments postId={post.id} users={users} comments={comments} setComments={setComments}/>
            <AddComments users={users} setPosts={setPosts} posts={posts} postId={post.id} post={post} comments={comments} setComments={setComments}/>
        </section>
    )
}