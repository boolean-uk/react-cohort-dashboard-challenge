import { useContext, useEffect, useState } from "react";
import DataContext from "../DataContext";
import { useNavigate } from "react-router-dom";
import { findById } from "../Utils";

function PostForm(props) {
    const { posts, loggedUser, setPosts, editingIndex, setEditingIndex } =
        useContext(DataContext);
    const { name } = props;
    if (editingIndex!==0) {
        console.log("Post data; ", findById(posts, editingIndex));
    }
    // const initialState =
    //     editingIndex >= 0
    //         ? findById(posts, editingIndex)
    //         : { userId: "", id: "", title: "", body: "" };

    const initialFormState = {
        userId: "",
        id: "",
        title: "",
        body: "",
    };
    const [formData, setFormData] = useState(initialFormState);
    useEffect(() => {
        if (editingIndex !== null) {
            setFormData( findById(posts, editingIndex));
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
        if (editingIndex !== null) {
            updateAnswer(editingIndex, formData);
        } else {
            createAnswer(formData);
            setFormData(initialFormState); 
        }
    };
    const updateAnswer = (id, answerData) =>
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
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
