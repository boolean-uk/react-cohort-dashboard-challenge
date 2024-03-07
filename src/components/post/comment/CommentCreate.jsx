import PropTypes from "prop-types";
import { useContext, useState } from "react";
import "../../../style/post/comment/CommentCreate.css";
import UserIcon from "../../icons/UserIcon";
import { postContext } from "../../../App";
import SendIconSvg from "../../icons/SendIconSvg";

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
            "https://boolean-api-server.fly.dev/BloodyFM/post/" +
                postId +
                "/comment",
            postApiRequest
        );
        const data = await response.json();
        console.log(data);
        setCommentData([...commentData, data]);
        setInput("");
    };

    return (
        <div className="comment-create">
            <UserIcon firstName={user.firstName} lastName={user.lastName} />

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
                    <SendIconSvg />
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
