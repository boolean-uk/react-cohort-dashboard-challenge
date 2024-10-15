import { useState } from "react";
import './Poster.css';
import { usePosts } from "../../context/PostProvider";



function Poster() {

    const { getPosts } = usePosts();

    const makePost = async (data) => {
        const postUrl = 'https://boolean-uk-api-server.fly.dev/George-Alexander-S/post';

        const settings = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        };
            await fetch(postUrl, settings);
            await getPosts();
    };

    const [formData, setFormData] = useState({
        title: "",
        content: "",
        contactId: 1
    })

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        makePost(formData);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title (Optional)</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    onChange={handleChange}
                >
                </input>
                <label htmlFor="content">Whats on your mind?</label>
                <input
                    id="content"
                    name="content"
                    type="text"
                    onChange={handleChange}
                >
                </input>
                <button>Post</button>
            </form>
        </>
    )

}

export default Poster