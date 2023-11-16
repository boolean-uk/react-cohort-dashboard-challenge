import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// styles
import "./style.css";

// components
import PostItem from "../HomePage/components/PostItem";

// api
import { getPostById } from "../../utilities/api";

// context
import { MainContext } from "../../App";

const PostPage = () => {
    const [post, setPost] = useState({});

    const { user, setPage, getPosts, posts } = useContext(MainContext);

    const { id } = useParams();

    useEffect(() => {
        setPage("post");
        getPostById(id).then((data) => setPost(data));
    }, [posts]);

    return (
        <div className="postPage">
            {Object.keys(post).length > 0 && (
                <PostItem user={user} post={post} getPosts={getPosts} />
            )}
        </div>
    );
};

export default PostPage;
