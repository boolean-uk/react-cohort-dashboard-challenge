import React, { useState } from "react";
import axios from "axios";

const BASE_URL = "https://boolean-api-server.fly.dev/OsamahAlmaliki";
const AUTHOR_ID = 1;

function NewCommentForm({ postId, onAddComment }) {
    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.post(`${BASE_URL}/post/${postId}/comment`, {
            postId,
            content,
            contactId: AUTHOR_ID,
        });
        onAddComment(response.data);
        setContent("");
        } catch (error) {
        console.error("Error creating comment:", error);
        }
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label>
            <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                placeholder="Add a comment..."
                style={{ width: 960 }}
            />
            </label>
            <button type="submit">Submit</button>
        </form>
        </div>
    );
}

export default NewCommentForm;
