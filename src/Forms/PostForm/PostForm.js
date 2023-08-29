import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../../DataContext";
import { findById } from "../../Utils";
import RequiredPostFieldWarning from "./RequiredPostFieldWarning";

function PostForm() {
    const {
        posts,
        loggedUser,
        setPosts,
        editingIndex,
        setEditingIndex,
        setRequiredFieldError,
        API_BASE_URL,
    } = useContext(DataContext);

    const navigate = useNavigate();

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


    // TODO: UNMOUNTING (WHEN USER NAVIGATES AWAY WITHOUT UPDATING THE POST) - DOESN'T WORK 
    // useEffect(() => {
    //     return () => {
    //       if (editingIndex !== null) {
    //         setEditingIndex(null); 
    //       }
    //       setFormData(initialFormState); 
    //     };
    //   }, [initialFormState]);

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
            updateData(editingIndex, formData);
        } else {
            createData(formData);
            setFormData(initialFormState);
        }
    };

    const updateData = (id, answerData) =>
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

    const createData = (answerData) => {
        const updatedAnswerData = {
            ...answerData,
            userId: loggedUser.id,
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
                <RequiredPostFieldWarning />
                <label htmlFor="title">Title</label>
                <input
                    class="form-post-title"
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
                <RequiredPostFieldWarning />
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
