
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import '../dashboard/Dashboard.css'
import { ProfileIcon } from "../header/ProfileIcon";
import { useContext } from "react";
import { ContactContext } from "../../App";
import { Link } from "react-router-dom";




export function PostAuthorSection ({post}) {
    const {contacts} = useContext(ContactContext);

    const currentContact = contacts.find((c) => c.id === post.contactId);

    if(!currentContact){
        return(
            "Loading..."
    )}

    return(
        <Row className="align-items-center mb-2 p-0">
            <Col xs="auto" className="post-profile-icon">
                <ProfileIcon contactId={post.contactId}/>
            </Col>
            <Col xs="auto" className="p-0">
                <Link to={`/account/${currentContact.id}`} className="profile-link">
                    <h3 className="mb-1 post-author-name">{currentContact.firstName} {currentContact.lastName}</h3>
                </Link>
                <p className="mb-0 post-author-title">{currentContact.jobTitle}</p>
            </Col>
        </Row>        
    )
}

PostAuthorSection.propTypes = {
    post: PropTypes.object.isRequired,
  };