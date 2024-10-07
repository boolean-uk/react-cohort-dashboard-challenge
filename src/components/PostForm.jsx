import React, { useState, useContext , useEffect} from 'react';
import { PostContext, UserContext } from '../App'
import Avatar from './Avatar';
import "../styles/PostForm.css";
import { useParams, Navigate } from 'react-router-dom';

function PostForm() {

    const { user } = useContext(UserContext);
    const { posts, setPosts } = useContext(PostContext);

    const { postId } = useParams(); 

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const postUrl = 'https://boolean-uk-api-server.fly.dev/Julia-Lindgren/post';

    useEffect(() => {
        if (postId) {
            const fetchPost = async () => {
                try {
                    const response = await fetch(`${postUrl}/${postId}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch post');
                    }
                    const postData = await response.json();
                    setTitle(postData.title);
                    setContent(postData.content);
                } catch (error) {
                    console.error(error);
                }
            };
            fetchPost();
        }
    }, [postId, postUrl]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && content && user) {
            const postData = {
                title,
                content,
                contactId: user.id,
            };
            if (postId) {
                updatePost(postData);
            } else {
                createPost(postData);
            }
            setTitle('');
            setContent('');
        }
    };

    if (isSubmitted) {
        return <Navigate to="/" replace />;
    }

    const fetchPosts = async () => {
        fetch(postUrl)
          .then((response) => response.json())
          .then((posts) => {
            setPosts(posts);
          })
          .catch((error) => {
            console.error('Error fetching posts:', error);
          });
      }

    const createPost = async (newPost) => {
        try {
            const response = await fetch(`${postUrl}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newPost),
            });
            if (!response.ok) {
                throw new Error('Failed to create contact');
            }
            const createdPost = await response.json();
            setPosts([...posts, createdPost ]);
        } catch (error) {
            console.error('Error creating contact:', error);
        }
    };

    const updatePost = async (updatedPost) => {
        try {
            const response = await fetch(`${postUrl}/${postId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedPost),
            });
            if (!response.ok) {
                throw new Error('Failed to update post');
            }
            const modifiedPost = await response.json();

            console.log('Before update:', posts);
            setPosts(posts.map(post => (post.id === postId ? modifiedPost : post)));
            console.log('After update:', posts);
            fetchPosts();
            setIsSubmitted(true);
        } catch (error) {
            console.error('Error updating post:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-content">
                {user && user.firstName && user.lastName && (
                    <Avatar userId={user.id} firstName={user.firstName} lastName={user.lastName} favouriteColour={user.favouriteColour} />
                )}
                <div>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        placeholder="Title"
                    />
                </div>
                <div>
                    <input
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        placeholder="What's on your mind?"
                    />
                </div>
                <button type="submit">{postId ? 'Update' : 'Post'}</button>
            </div>
        </form>
    );
}

export default PostForm;