import React, { useState } from "react";
import { AddPost } from "./api/api";


function NewPostForm({ setPosts }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [contactId, setContactId] = useState('');
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newPost = await AddPost({ title, content });
        setPosts(prevPosts => [newPost, ...prevPosts]);
        setTitle('');
        setContent('');
        setContactId('');
    };

    
    return(
        
        <form onSubmit={handleSubmit}>
            <input type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            />

         <input type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Whats on your mind...?"
            />
            
            <button type="submit">Post</button>
        </form>
        
    );
}
export default NewPostForm;