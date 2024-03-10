import { useContext } from "react";
import Post from "./Post";
import { postContext } from "../../App";

const Posts = () => {
    const { posts } = useContext(postContext);
    return (
        <ul className="post-list">
            {posts.toReversed().map((post, i) => (
                <Post key={i} post={post} />
            ))}
        </ul>
    );
};

export default Posts;