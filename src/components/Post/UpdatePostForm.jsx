import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BASE_URL = "https://boolean-api-server.fly.dev/OsamahAlmaliki";

const UpdatePostForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [contactId, setContactId] = useState("");

    const { id } = useParams();

    useEffect(() => {
        const fetchPost = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/post/${id}`);
            const postData = response.data;
            setTitle(postData.title);
            setContent(postData.content);
            setContactId(postData.contactId);
        } catch (error) {
            console.error("Error fetching post:", error);
        }
        };
        fetchPost();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        await axios.put(`${BASE_URL}/post/${id}`, {
            title,
            content,
            contactId,
        });
        window.location.href = `/post/${id}`;
        } catch (error) {
        console.error("Error updating post:", error);
        }
    };

    return (
        <div>
        <h2>Update Post</h2>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="title">Title:</label>
            <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            </div>
            <div>
            <label htmlFor="content">Content:</label>
            <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            </div>
            <button type="submit">Update Post</button>
        </form>
        </div>
    );
};

export default UpdatePostForm;
