import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "./Post";
import { MetaContext } from "../../App";

function PostFull() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const { showComments, setShowComments } = useContext(MetaContext);

    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/Hjaldrgud/post/${id}`)
            .then((response) => response.json())
            .then((data) => setPost(data))
            .catch((error) => console.error("Error fetching post:", error));
        
            if (!showComments) {
                setShowComments(true);
            }
    }, [id]);

    useEffect(() => {
        setShowComments(true);
    }, [setShowComments]);

    if (!post) {
        return <p>Loading...</p>;
    }

    return <Post post={post} />;
}

export default PostFull;
