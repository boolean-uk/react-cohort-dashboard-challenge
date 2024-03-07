import { useContext } from "react";
import "../../../style/post/comment/CommentCreate.css";
import UserIcon from "../../icons/UserIcon";
import { postContext } from "../../../App";
import SendIconSvg from "../../icons/SendIconSvg";

const CommentCreate = () => {
    const { user } = useContext(postContext);
    return (
        <div className="comment-create">
            <UserIcon firstName={user.firstName} lastName={user.lastName} />
            <div className="comment-container">
                <input className="comment-bar" placeholder="Add a comment..." />
                <button className="comment-btn">
                    <SendIconSvg />
                </button>
            </div>
        </div>
    );
};

export default CommentCreate;
