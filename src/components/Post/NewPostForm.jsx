import React, { useState } from "react";
import axios from "axios";

const BASE_URL = "https://boolean-api-server.fly.dev/OsamahAlmaliki";
const AUTHOR_ID = 1;

function NewPostForm({ onAddPost }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        if (!title || !content) {
            console.error("Title and content are required");
            return;
        }

        const response = await axios.post(`${BASE_URL}/post`, {
            title,
            content,
            contactId: AUTHOR_ID,
        });
        onAddPost(response.data);
        setTitle("");
        setContent("");
        } catch (error) {
        console.error("Error creating post:", error.response?.data);
        }
    };

    return (
        <div style={{ marginBottom: "20px" }}>
        {" "}
        <h2>Create New Post</h2>
        <form onSubmit={handleSubmit}>
            <label>
            Title:
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="Enter a title for your post"
            />
            </label>
            <label>
            Content:
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                placeholder="What's on your mind today?"
            />
            </label>
            <button type="submit">Submit</button>
        </form>
        </div>
    );
}

export default NewPostForm;
