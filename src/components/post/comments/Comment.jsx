import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { BaseURL, postContext } from "../../../App";
import UserIcon from "../../icons/UserIcon";
import { useNavigate } from "react-router-dom";



const Comment = ({ comment }) => {
    const { contacts} = useContext(postContext);
    let user = contacts.find((c) => c.id === comment.contactId);
    if (user === undefined)
        user = {
            firstName: "Unknown",
            lastName: "User",
        };

        const nav = useNavigate();

        const visitProfile = () => {
            nav("/profile/" + user.id);
        };
    
        const deleteComment = () => {
            console.log("DELETE");
            fetch(
              BaseURL + "/post/" +
              comment.postId +
                "/comment/" +
                comment.id,
              {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to delete comment');
                }
                return response.json();
            })
            .catch(error => {
                console.error('Error deleting comment:', error.message);
            });
        };

        const [editing, setEditing] = useState(false);
        const [editedComment, setEditedComment] = useState(comment);

    const editComment = () => {
        setEditing(true);
      };
     
      const save = () => {
        setEditing(false);
        fetch(
            BaseURL + "/post/" +
            comment.postId +
            "/comment/" +
            comment.id,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(editedComment)
            }
        )
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to update comment');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error updating comment:', error.message);
        });
    };
    
       
    return (
         <li className="list-item">
            <UserIcon
                color={user.favouriteColour}
                firstName={user.firstName}
                lastName={user.lastName}
                onClick={visitProfile}
            />
            <div className="comment-content">
                <h3>{user.firstName + " " + user.lastName}</h3>
                {editing ? (
                    <input
                        type="text"
                        value={editedComment.content}
                        onChange={(e) =>
                            setEditedComment({
                                ...editedComment,
                                content: e.target.value,
                            })
                        }
                    />
                ) : (
                    <p>{comment.content}</p>
                )}
                <div className="comment-form">
                    {!editing && (
                        <>
                            <button className="comment-btn" onClick={editComment}>Edit</button>
                            <button className="comment-btn" onClick={deleteComment}>Delete</button>
                        </>
                    )}
                    {editing && <button onClick={save}>Save</button>}
                </div>
            </div>
        </li>
    );
};

export default Comment;
Comment.propTypes = {
    comment: PropTypes.object.isRequired,
};