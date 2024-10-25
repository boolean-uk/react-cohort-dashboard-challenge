import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileAuthor from './ProfileAuthor';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [authors, setAuthors] = useState([]);

  
  
    useEffect(() => {
        fetch(`https://boolean-uk-api-server.fly.dev/MayraMahamud/post/`)
        .then(response => response.json())
        .then(data => setPosts(data));
    },[]);

   
    useEffect(() => {
        fetch(`https://boolean-uk-api-server.fly.dev/MayraMahamud/contact/`)
        .then(response => response.json())
        .then(data => setAuthors(data));
    },[]);

   
   
    const getInitials = (firstName, lastName) => {
        if (!firstName || !lastName) return '';
        return `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;
    };

  
    const findAuthorById = (contactId) => {
        const contact = authors.find(contact => contact.id === contactId);
        return contact ? getInitials(contact.firstName, contact.lastName) : '';
    };

    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <h3>Author: <ProfileAuthor initials={findAuthorById(post.contactId)} /></h3>
                    <Link to={`/posts/${post.id}`}>
                        <h2>{post.title}</h2>
                    </Link>
                    <p>{post.content}</p>
                    <p><CommentForm /></p>
                    <CommentList postId={post.id} />
                </div>
            ))}
        </div>
    );
};

export default PostList;