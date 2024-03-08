import { useContext } from "react";
import { StyleContext } from "../../App";

function CommentListItem({ comment, contact, index }) {
    const { getColorFromInitials } = useContext(StyleContext);

    function getInitials(firstName, lastName) {
        return firstName[0] + lastName[0]
    }

    if (contact && comment) return (
        <li key={index}>
            <div className="comment-container">
                <div className="profile-pic" style={{ backgroundColor: getColorFromInitials(getInitials(contact.firstName, contact.lastName)) }}>
                    {getInitials(contact.firstName, contact.lastName)}
                </div>
                <div className="full-comment">
                    <div className="commenter">
                        {contact.firstName + ' ' + contact.lastName}
                    </div>
                    <div className="comment">
                        {comment.content}
                    </div>
                </div>
            </div>
        </li>
    );

    return (
        <li>
            <p>Loading...</p>
        </li>
    )
}

export default CommentListItem;
