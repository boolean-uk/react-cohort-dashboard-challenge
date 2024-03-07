import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../components/posts/Post";

export default function PostDetails() {
    const { id } = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/spectraldesign/post/${id}`)
            .then((response) => response.json())
            .then((data) => setPost(data))
    }, [id]);
    return (
            post.contactId ? <Post post={post} showAllComments={true} /> : <h1>Loading...</h1>
    )
}