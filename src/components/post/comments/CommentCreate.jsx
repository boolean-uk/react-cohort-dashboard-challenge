import PropTypes from "prop-types";
import { useContext, useState } from "react";
import UserIcon from "../../icons/UserIcon";
import { BaseURL, postContext } from "../../../App";
import SendIcon from "../../icons/SendIcon";
import { useNavigate } from "react-router-dom";

const CommentCreate = ({ postId, commentData, setCommentData }) => {
    const { user } = useContext(postContext);
    const [input, setInput] = useState("");

    const submitComment = async (event) => {
        event.preventDefault();
        if (input.trim() === "") return;
        const newComment = {
            contactId: user.id,
            content: input.trim(),
            postId: postId,
        };

        const postApiRequest = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newComment),
        };

        const response = await fetch(
            BaseURL + "/post/" +
                postId +
                "/comment",
            postApiRequest
        );
        const data = await response.json();
        setCommentData([...commentData, data]);
        setInput("");
    };
    const nav = useNavigate();

    const visitProfile = () => {
        nav("/profile/" + user.id);
    };

    return (
        <div className="comment-create">
            <UserIcon
                color={user.favouriteColour}
                firstName={user.firstName}
                lastName={user.lastName}
                onClick={visitProfile}
            />
            <form className="comment-form" onSubmit={submitComment}>
                <input
                    type="text"
                    name="comment"
                    className="comment-bar"
                    placeholder="Add a comment..."
                    value={input}
                    onChange={(event) => {
                        setInput(event.target.value);
                    }}
                />
                <button type="submit" className="comment-btn">
                    <SendIcon />
                </button>
                
            </form>
            
        </div>
    );
};

export default CommentCreate;
CommentCreate.propTypes = {
    postId: PropTypes.any.isRequired,
    commentData: PropTypes.array.isRequired,
    setCommentData: PropTypes.func.isRequired,
};