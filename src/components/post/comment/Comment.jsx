import PropTypes from "prop-types";
import "../../../style/post/comment/Comment.css";
import { useContext } from "react";
import { postContext } from "../../../App";
import UserIcon from "../../icons/UserIcon";

const Comment = ({ comment }) => {
    const { contacts } = useContext(postContext);
    let owner = contacts.find((c) => c.id === comment.contactId);
    if (owner === undefined)
        owner = {
            firstName: "Unknown",
            lastName: "User",
        };

    return (
        <li className="list-item">
            <UserIcon firstName={owner.firstName} lastName={owner.lastName} />
            <div className="comment-content">
                <h3>{owner.firstName + " " + owner.lastName}</h3>
                <p>{comment.content}</p>
            </div>
        </li>
    );
};

export default Comment;
Comment.propTypes = {
    comment: PropTypes.object.isRequired,
};
