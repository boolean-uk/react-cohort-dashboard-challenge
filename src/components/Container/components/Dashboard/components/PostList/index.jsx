import { useContext } from "react";
import "../../../../../../assets/css/PostList.css"
import Post from "./components/Post";
import { PostCrudContext } from "../../../../../../App";

function PostList() {
    const postContext = useContext(PostCrudContext)
    const { posts } = postContext

    return (
        <>
            <div className="PostList-main">
                {
                    posts.map(post => (
                        <Post key={post.id} post={post}></Post>
                    ))
                }
            </div>
        </>
    )
}

export default PostList;