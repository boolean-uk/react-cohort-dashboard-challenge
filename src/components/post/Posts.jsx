import "../../style/post/Posts.css";
import Post from "./Post";

const Posts = () => {
    const posts = ["1", "2", "3", "4"];
    return (
        <ul className="post-list">
            {posts.map((post, i) => (
                <Post key={i} post={post} />
            ))}
        </ul>
    );
};

export default Posts;
