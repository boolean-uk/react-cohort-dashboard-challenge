import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// styles
import "./style.css";

// components
import PostItem from "../HomePage/components/PostItem";

// api
import { getPostById } from "../../utilities/api";

const PostPage = ({ user, setPage }) => {
    const [post, setPost] = useState({});

    const { id } = useParams();

    useEffect(() => {
        setPage("post");
        getPostById(id).then((data) => setPost(data));
    }, []);

    return (
        <div className="postPage">
            {Object.keys(post).length > 0 && (
                <PostItem user={user} post={post} />
            )}
        </div>
    );
};

export default PostPage;
