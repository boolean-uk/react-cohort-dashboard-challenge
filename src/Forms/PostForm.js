import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../DataContext";
import { findById, generatePostId } from "../Utils";

function PostForm(props) {
    const {
        posts,
        loggedUser,
        setPosts,
        editingIndex,
        setEditingIndex,
        requiredFieldError,
        setRequiredFieldError,API_BASE_URL
    } = useContext(DataContext);

    const initialFormState = {
        userId: "",
        id: "",
        title: "",
        body: "",
    };
    const [formData, setFormData] = useState(initialFormState);
    useEffect(() => {
        if (editingIndex !== null) {
            setFormData(findById(posts, editingIndex));
        } else {
            setFormData(initialFormState);
        }
    }, [editingIndex, posts]);

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!formData.title || !formData.body) {
            setRequiredFieldError(true);
            return;
        } else {
            setRequiredFieldError(false);
        }
        if (editingIndex !== null) {
            updateAnswer(editingIndex, formData);
        } else {
            createAnswer(formData);
            setFormData(initialFormState);
        }
    };

    const updateAnswer = (id, answerData) =>
        fetch(`${API_BASE_URL}/posts/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(answerData),
        }).then(() => {
            const updatedAnswers = posts.map((r) =>
                r.id == Number(id) ? { ...r, ...answerData } : r
            );
            setPosts(updatedAnswers);
            setEditingIndex(null);
            navigate("/");
        });

    const createAnswer = (answerData) => {
        const updatedAnswerData = {
            ...answerData,
            userId: loggedUser.id,
            id: generatePostId(),
        };
        fetch(`${API_BASE_URL}/posts`, {
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
        <section className="main__form">
            <form class="post-form" onSubmit={handleSubmit} noValidate>
                {requiredFieldError && <p class="error">Required field</p>}
                <label htmlFor="title">Title</label>{" "}
                <input
                    class="form-post-title"
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
                {requiredFieldError && <p class="error">Required field</p>}
                <label htmlFor="body">Content</label>
                <input
                    class="form-post-input"
                    type="text"
                    placeholder="What's on your mind?"
                    name="body"
                    value={formData.body}
                    onChange={handleChange}
                />
                <div className="button-container">
                    <button class="post-button" type="submit">
                        {editingIndex ? "Update" : "Post"}
                    </button>
                </div>
            </form>
        </section>
    );
}

export default PostForm;
