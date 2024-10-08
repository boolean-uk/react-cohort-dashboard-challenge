/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from 'react'
import '../../styles/Form.css'

export default function CreatePostForm() {
    const [postContent, setPostContent] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("https://boolean-uk-api-server.fly.dev/siljegja/post", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                contactId: 1,
                title: " ",
                content: postContent,
            }),
        })  

        setPostContent('');
    }

    return (
        <section className="form-container">
            <form onSubmit={handleSubmit}>

                <input 
                    type="text"
                    placeholder="What's on your mind?"
                    value={postContent}
                    onChange={(event) => setPostContent(event.target.value) } />
               
                <button>Post</button>
            </form>
        </section>
            
    );
}