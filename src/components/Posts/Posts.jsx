import { useContext, useEffect, useState } from "react";
import { MetaContext } from "../../App";
import Post from "./Post";
import PostPost from "./PostPost";

function Posts() {
    const { posts, showComments, setShowComments } = useContext(MetaContext);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        setShowComments(false);
    }, [setShowComments]);

    useEffect(() => {
        setIsReady(true); // Set isReady to true once showComments is updated
    }, [showComments]);

    // Render only when isReady is true
    if (!isReady) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <div>
                <PostPost />
            </div>
            <div>
                {posts.map((post, index) => (
                    <Post post={post} key={index} />
                ))}
            </div>
        </div>
    );
}

export default Posts