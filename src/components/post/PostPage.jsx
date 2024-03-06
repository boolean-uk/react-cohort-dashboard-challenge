import "../../style/post/PostPage.css";
import PostCreate from "./PostCreate";
import Posts from "./Posts";

const PostPage = () => {
    return (
        <div className="page">
            <PostCreate />
            <Posts />
        </div>
    );
};

export default PostPage;
