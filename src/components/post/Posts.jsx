import { useContext } from "react";
import "../../style/post/Posts.css";
import Post from "./Post";
import { postContext } from "../../App";

const Posts = () => {
    const { posts, contacts } = useContext(postContext);
    return (
        <ul className="post-list">
            {posts.map((post, i) => (
                <Post key={i} post={post}/>
            ))}
        </ul>
    );
};

export default Posts;
