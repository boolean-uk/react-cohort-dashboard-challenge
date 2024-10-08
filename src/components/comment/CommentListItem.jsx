import { Card, Col, Row } from "react-bootstrap";
import '../dashboard/Dashboard.css'
import { useContext, useEffect, useState } from "react";
import { ContactContext } from "../../App";
import PropTypes from "prop-types";
import { ProfileIcon } from "../header/ProfileIcon";
import { Link } from "react-router-dom";
import Send from '../../../_assets/send.svg';
import Trash from '../../../_assets/trash.svg';




export function CommentListItem({comment, fetchComments}) {
    const { contacts, fetchPosts } = useContext(ContactContext);
    const [formData, setFormData] = useState({
        postId: 0,
        contactId: 0,
        content: ""
    });

    const [isEditing, setIsEditing] = useState(false); 

    const handleEditClick = () => {
        setIsEditing(true); 
    };


    

    useEffect(() => {
        if(comment) {
            setFormData({
                postId: comment.postId,
                contactId: comment.contactId,
                content: comment.content
            });
        }
      }, []);

    if (!contacts || contacts.length === 0) {
        return <div>Loading contacts...</div>;
    }

    if (!contacts || !comment) {
        return "Loading contacts or comments...";
    }


    const currentContact = contacts.find((c) => c.id === comment.contactId);

    if (!currentContact) {
        return "Loading currentcontact...";
    }


    async function handleSubmit(event) {
        console.log("keo");
        
        event.preventDefault();

        await fetch(`https://boolean-uk-api-server.fly.dev/tuvaea/post/${comment.postId}/comment/${comment.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)

        })
        
        await fetchPosts();
        await fetchComments();
        setIsEditing(false);
    }


    async function handleDelete(event) {
        
        event.preventDefault();

    try {
        await fetch(`https://boolean-uk-api-server.fly.dev/tuvaea/post/${comment.postId}/comment/${comment.id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });

        await fetchComments(); 

    } catch (error) {
        console.error("Error deleting the comment:", error);
    }
    }

    
    

  
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    

    return(
        <li className="comment-item">
            <Row className="m-0 p-0">
                <Col xs="auto" className="p-0 m-0">
                    <ProfileIcon contactId={comment.contactId} />
                </Col>
                <Col xs="auto" className="comment-width">
                    <Card className="comment-card">
                        <Link to={`/account/${currentContact.id}`} className="profile-link">
                            <h3 className="mb-1 comment-author-name">
                                {currentContact.firstName} {currentContact.lastName}
                            </h3>
                        </Link>
                        <Row className="align-items-center justify-content-between">
                            <Col xs="auto" className="p-0 m-0 flex">
                                <form onSubmit={handleSubmit} className="d-flex p-0 m-0">
                                    {!isEditing ? (
                                        <p
                                            className="mb-0 post-content-comment"
                                            onClick={handleEditClick}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            {formData.content || "Add a comment"}
                                        </p>
                                    ) : (
                                        <input
                                            type="text"
                                            name="content"
                                            value={formData.content}
                                            onChange={handleChange}
                                            autoFocus 
                                            className="form-control ms-2 comment-form-edit"
                                            placeholder="Add a comment"
                                        />
                                    )}
                                    {isEditing && (
                                        <button  type="submit" className="btn submit-button-comment">
                                            <img src={Send} alt="Send" className="edit-icons" />
                                        </button>
                                    )}
                                </form>
                            </Col>
                            <Col xs="auto" className="p-0 m-0 ">
                                <button onClick={handleDelete} className="btn submit-button-comment">
                                    <img src={Trash} alt="Send" className="edit-icons" />
                                </button>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </li>
    )
}

CommentListItem.propTypes = {
    comment: PropTypes.object.isRequired,
    fetchComments: PropTypes.func.isRequired,
  };