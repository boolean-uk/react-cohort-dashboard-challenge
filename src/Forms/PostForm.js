import { useContext, useState } from "react";
import DataContext from "../DataContext";

function PostForm(props) {
    const { posts, loggedUser, setPosts } = useContext(DataContext);
    const { name } = props;
    const initialState = { userId: "", id: "", title: "", body: "" };
    const [formData, setFormData] = useState(initialState);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        createAnswer(formData);

        setFormData(initialState);
    };

    const createAnswer = (answerData) => {
        const updatedAnswerData = {
            ...answerData,
            userId: loggedUser.id,
        };
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(updatedAnswerData),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((newPost) => setPosts([newPost, ...posts]));
    };
    return (
        <form class="form" onSubmit={handleSubmit} noValidate>
            <input
                class="form-post-title"
                type="text"
                placeholder="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
            />
            <input
                class="form-post-input"
                type="text"
                placeholder="What's on your mind?"
                name="body"
                value={formData.body}
                onChange={handleChange}
            />
            <button class="post-button" type="submit">
                &rarr;
            </button>
        </form>
    );
}

export default PostForm;
