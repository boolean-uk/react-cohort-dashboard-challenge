import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import { useEffect, useState, createContext } from 'react';
import Avatar from './Avatar';
import "../styles/PostListItem.css";
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import { PostContext, UserContext } from '../App';

function PostListItem({ post }) {
    const { posts, setPosts } = useContext(PostContext);
    const { user } = useContext(UserContext);
    const [contact, setContact] = useState(null);
    const navigate = useNavigate();
    const contactUrl = `https://boolean-uk-api-server.fly.dev/Julia-Lindgren/contact/${post.contactId}`;
    const postUrl = `https://boolean-uk-api-server.fly.dev/Julia-Lindgren/post/${post.id}`;

    const fetchContact = async () => {
        fetch(contactUrl)
            .then((response) => response.json())
            .then((contact) => {
                setContact(contact);
            })
            .catch((error) => {
                console.error('Error fetching contact:', error);
            });
    }

    const deletePost = async () => {
        fetch(postUrl, {
            method: 'DELETE',
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to delete post');
                }
            })
            .then(() => {
                setPosts((prevPosts) => prevPosts.filter((p) => p.id !== post.id));
            })
            .catch((error) => {
                console.error('Error deleting post:', error);
            });
    };

    useEffect(() => {
        fetchContact();
    }, [post.contactId]);

    const isPostOwner = user && user.id === post.contactId;

    return (
        <li className='postListItem'>
            {contact && (
                <div className="contact-info">

                    <Avatar userId={contact.id} firstName={contact.firstName} lastName={contact.lastName} favouriteColour={contact.favouriteColour} />
                    <div className="contact-text">
                    <Link to={`/profile/${contact.id}`}><span className="contact-name">{contact.firstName} {contact.lastName}</span> </Link>
                        <Link to={`/post/${post.id}`}><span className="post-title">{post.title}</span></Link>
                    </div>
                </div>
            )}
            <div className="post-content">
                {post.content}
                {isPostOwner && (
                    <div className='post-actions'>
                        <button onClick={deletePost}>Delete Post</button>
                        <button onClick={() => navigate(`/edit-post/${post.id}`)} className="edit-button"> Edit Post </button>
                    </div>
                )}
            </div>

            <CommentList postId={post.id} />
            <CommentForm postId={post.id} />
        </li>
    )

}

export default PostListItem