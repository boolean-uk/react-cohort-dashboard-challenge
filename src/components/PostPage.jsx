import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostListItem from './PostListItem'; 

function PostPage() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const postUrl = `https://boolean-uk-api-server.fly.dev/Julia-Lindgren/post/${postId}`;

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(postUrl);
                if (!response.ok) {
                    throw new Error('Failed to fetch post');
                }
                const postData = await response.json();
                setPost(postData);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };

        fetchPost();
    }, [postUrl]);

    return (
        <div className="postPage">
            {post ? (
                <>
                    <PostListItem post={post} />
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default PostPage;
