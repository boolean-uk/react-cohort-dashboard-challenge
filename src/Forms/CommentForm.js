import { useContext, useState } from "react";
import DataContext from "../DataContext";
import { Link } from "react-router-dom";
import { getInitials } from "../Utils";

function CommentForm(props) {
    const { loggedUser,setComments } = useContext(DataContext);
    const { comments, post } = props; // !!!
    const initialState = {
        postId: "",
        userId: "",
        id: "",
        name: "",
        email: "",
        body: "",
    };
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
        fetch("https://jsonplaceholder.typicode.com/comments", {
            method: "POST",
            body: JSON.stringify(updatedAnswerData),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((newComment) =>
                setComments((prevComments) => ({
                    ...prevComments,
                    [post.id]: [...prevComments[post.id], newComment],
                }))
            );
    };
    return (
        <div class="add-comment">
            <Link to={`/view/profile/${loggedUser.id}`}>
                <div class="comment-circle-own">
                    {getInitials(loggedUser.name)}
                </div>
            </Link>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add your comment"
                    name="body"
                    value={formData.body}
                    onChange={handleChange}
                />
                <button class="submit-button">&rarr;</button>
            </form>
        </div>
    );
}

export default CommentForm;
