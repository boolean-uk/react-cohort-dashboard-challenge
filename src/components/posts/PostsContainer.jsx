import { useContext } from "react";
import CreatePost from "./CreatePost";
import PostList from "./PostList";
import "./posts.css";
import { AppContext } from "../../App";
function PostsContainer() {
    const { posts} = useContext(AppContext)

    return (
        <>
        <div className="posts-container">
            <CreatePost />
            <PostList posts={posts}/>
        </div>
        </>
    )
}

export default PostsContainer;