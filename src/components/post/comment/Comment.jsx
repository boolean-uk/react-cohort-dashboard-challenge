import PropTypes from "prop-types";
import { useContext } from "react";
import { postContext } from "../../../App";
import UserIcon from "../../icons/UserIcon";

const Comment = ({ comment }) => {
    const { contacts } = useContext(postContext);
    let user = contacts.find((c) => c.id === comment.contactId);
    if (user === undefined)
        user = {
            firstName: "Unknown",
            lastName: "User",
        };

    return (
        <li className="list-item">
            <UserIcon
                color={user.favouriteColour}
                firstName={user.firstName}
                lastName={user.lastName}
            />
            <div className="comment-content">
                <h3>{user.firstName + " " + user.lastName}</h3>
                <p>{comment.content}</p>
            </div>
        </li>
    );
};

export default Comment;
Comment.propTypes = {
    comment: PropTypes.object.isRequired,
};