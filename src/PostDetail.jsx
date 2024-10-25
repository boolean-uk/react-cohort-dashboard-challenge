import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentList from "./CommentList";

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://boolean-uk-api-server.fly.dev/MayraMahamud/post/${id}`)
            .then(response => response.json())
            .then(data => {
                setPost(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <CommentList postId={post.id} />
        </div>
    );
};

export default PostDetail;