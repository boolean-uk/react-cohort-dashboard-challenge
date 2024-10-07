import React, { useState, useContext } from 'react';
import { PostContext, UserContext } from '../App'
import Avatar from './Avatar';


function CommentForm({ postId }) {

    const { user } = useContext(UserContext);
    const { posts, setPosts } = useContext(PostContext);

    const [content, setContent] = useState('');

    const commentsUrl = `https://boolean-uk-api-server.fly.dev/Julia-Lindgren/post/${postId}/comment`;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (content && user) {
            const newComment = {
                content,
                contactId: user.id,
                postId: postId
            };
            createComment(newComment);
            setContent('');
        }
    };

    const createComment = async (newComment) => {
        try {
            const response = await fetch(commentsUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newComment),
            });
            if (!response.ok) {
                throw new Error('Failed to create comment');
            }
            const createdComment = await response.json();

            setPosts((prevPosts) =>
                prevPosts.map((post) => post.id === postId ? { ...post, comments: [...(post.comments || []), createdComment] } : post
                )
            );

        } catch (error) {
            console.error('Error creating comment:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-content">
                {user && user.firstName && user.lastName && (
                    <Avatar
                        userId={user.id}
                        firstName={user.firstName}
                        lastName={user.lastName}
                        favouriteColour={user.favouriteColour}
                    />
                )}
                <div>
                    <input
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        placeholder="Add a comment..."
                    />
                </div>
                <button type="submit">Comment</button>
            </div>
        </form>
    );
}

export default CommentForm;