/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import '../../styles/Form.css'

export default function CreateCommentForm({postId, comments, setComments }) {
    const [commentData, setCommentData] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(`https://boolean-uk-api-server.fly.dev/siljegja/post/${postId}/comment`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                postId: postId,
                contactId: 1,
                content: commentData,
            }),
        })
        setComments([...comments, commentData]);
        setCommentData('');
    }

    return (
        <section className="form-container">
            <form onSubmit={handleSubmit} style={{marginLeft:"15px"}}>
                <input 
                    type="text"
                    placeholder="Add a comment..."
                    value={commentData}
                    onChange={(event) => setCommentData(event.target.value)} />
                <button>{'>'}</button>
            </form>
        </section>
    );
}