import { useParams } from "react-router-dom";
import "../../style/post/PostPage.css";
import "../../style/post/Posts.css";
import Post from "./Post";
import { useContext } from "react";
import { postContext } from "../../App";

const DetailPage = () => {
    const { id } = useParams();
    const { posts } = useContext(postContext);

    const post = { ...posts.find((p) => p.id === parseInt(id)) };
    return (
        <div className="page">
            <ul className="post-list">
                <Post post={post} />
            </ul>
        </div>
    );
};

export default DetailPage;
